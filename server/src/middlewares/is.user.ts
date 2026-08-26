import { NextFunction, Request, Response } from "express";
import { decodeJWT, Payload } from "../functions/jwt.genarator.js";

export interface AuthenticatedRequest extends Request {
  user?: Payload;
}

export const isUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.cookies?.jwt_token;
    if (!token) {
      res.status(401).json({
        success: false,
        message: "Unauthorized: Access token missing",
      });
      return;
    }
    const decodedUser = decodeJWT(token);
    req.user = decodedUser;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or expired token",
    });
  }
};
