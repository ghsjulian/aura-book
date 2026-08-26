import type { Request, Response } from "express";
import { EMAIL_REGEX, validatePasswordStrength } from "../utils/validator.js";
import User from "../models/user.model.js";
import { genHash, matchHashed } from "../functions/password-hashing.js";
import { createJWT } from "../functions/jwt.genarator.js";
import fs from 'node:fs/promises';
import path from 'node:path';

// Signup Request Interface
interface SignupRequestData {
  name?: string;
  email?: string;
  password?: string;
}
// Login Request Interfaces
interface RequestData {
  email?: string;
  password?: string;
}
// Response Interface
interface ResponseData {
  success: boolean;
  message: string;
  user: object
  token: string
}

interface AuthenticatedRequest extends Request {
  user: {
    userId: string;
  };
}

export const userLogin = async (req: Request<RequestData>, res: Response<ResponseData | { error: string }>): Promise<void> => {
  try {
    const { email, password } = req?.body;

    if (!email || !password) {
      res.status(403).json({
        success: false,
        message: "Email & Password is required",
        user: {}, token: ""
      });
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      res
        .status(400)
        .json({ success: false, message: "Invalid email format", user: {}, token: "" });
      return;
    }

    const isExistUser = await User.findOne({ email: email.trim() });

    if (!isExistUser || !isExistUser.password) {
      res
        .status(400)
        .json({
          success: false,
          message: "Invalid email or password",
          user: {}, token: ""
        });
      return;
    }

    const isMatched: boolean = await matchHashed(
      password.trim(),
      isExistUser.password,
    );

    if (!isMatched) {
      res
        .status(400)
        .json({
          success: false,
          message: "Invalid email or password",
          user: {}, token: ""
        });
      return;
    }

    const token: string = createJWT({
      role: "USER",
      userId: isExistUser._id.toString(),
    });

    const days = parseInt(process.env.EXPIRES_IN || "30", 10);
    const COOKIE_MAX_AGE = 30 * 24 * 60 * 60 * 1000;
    res.cookie("jwt_token", token, {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" || false,
      sameSite: "lax",
    });

    const userObject = isExistUser.toObject()
    delete userObject.password;

    res.status(200).json({
      success: true,
      message: "User Logged In successfully",
      user: userObject, token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error", user: {}, token: "" });
  }
};

export const userSignup = async (req: Request<SignupRequestData>, res: Response<ResponseData>): Promise<void> => {
  const { name, email, password } = req?.body;

  if (!name || !email || !password) {
    res.status(403).json({
      success: false,
      message: "All fields are required",
      user: {}, token: ""
    });
    return;
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    res
      .status(400)
      .json({ success: false, message: "Invalid email format", user: {}, token: "" });
    return;
  }
  const checkPassword = validatePasswordStrength(password.trim());
  if (!checkPassword.isValid) {
    res.status(400).json({
      success: false,
      message: checkPassword.error || "Password is too weak",
      user: {}, token: ""
    });
    return;
  }
  const isExistUser: object | null = await User.findOne({ email });
  if (isExistUser) {
    res.status(403).json({
      success: false,
      message: "User already registered with this email",
      user: {}, token: ""
    });
    return;
  }

  const hashed: string = await genHash(password.trim());
  const newUser = await new User({
    name: name.trim(),
    email: email.trim(),
    password: hashed,
    profileImage: "",
  });
  await newUser.save();
  const token: string = createJWT({
    role: "USER",
    userId: newUser._id.toString(),
  });

  // Define duration in milliseconds (e.g., 7 days = 7 * 24 * 60 * 60 * 1000)
  const EXPIRES_IN = process.env.EXPIRES_IN
    ? parseInt(process.env.EXPIRES_IN, 10)
    : 30 * 24 * 60 * 60 * 1000; // 7 days fallback
  res.cookie("jwt_token", token, {
    maxAge: EXPIRES_IN,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Only send over HTTPS in prod
    sameSite: "lax", // Protects against CSRF
  });

  const userObject = newUser.toObject();
  delete userObject.password;

  res.status(200).json({
    success: true,
    message: "User registration successfully",
    user: userObject, token
  });
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.query
    if (!id || id === "") {
      res.status(400).json({
        success: false,
        message: "User id is required",
        user: {}, token: ""
      });
      return;
    }
    const user = await User.findById(id).select("-password")
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
        user: {}, token: ""
      });
      return;
    }
    res.status(200).json({
      success: false,
      message: "User found",
      user, token: ""
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      user: {}, token: ""
    });
    return;
  }
}

export const userLogout = (req: Request, res: Response) => {
  res.cookie("jwt_token", "", {
    maxAge: 0,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production" || false,
    sameSite: "lax",
  });
  res.status(200).json({
    success: true,
    messahe: "User logged out successfully",
    user: {}, token: ""
  })
}

export const updateProfileImage = async (req: AuthenticatedRequest, res: Response<ResponseData>): Promise<void> => {
  try {
    if (!req.file) {
      res.status(400).json({
        success: false,
        message: "No user image found",
        user: {}, token: ""
      });
      return
    }
    const newFile = req?.file?.filename
    const userId = req.user.userId

    const user = await User.findById(userId).select("-password")

    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found",
        user: {}, token: ""
      });
      return;
    }

    if (user.profileImage) {
      const profileImgPath = user.profileImage;
      const absolutePath = path.join(process.cwd(), profileImgPath)
      try {
        await fs.unlink(absolutePath)
      } catch (error: any) {
        console.log(error)
      }
    }


    user.profileImage = `/uploads/${newFile}`
    await user.save()

    res.status(200).json({
      success: true,
      message: 'Files uploaded successfully',
      user, token: ""
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      user: {}, token: ""
    })
  }
}