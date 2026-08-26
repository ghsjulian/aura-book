import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";
import type { StringValue } from "ms"; 

const JWT_SECRET: string = process.env.JWT_SECRET || "fallback_secret_key";

export interface Payload extends JwtPayload {
  userId: string;
  role: string;
}

export const createJWT = (data: Payload): string => {
  const options: SignOptions = {};
  const expiresInEnv = process.env.EXPIRES_IN;
  if (expiresInEnv) {
    options.expiresIn = expiresInEnv as StringValue;
  } else {
    options.expiresIn = "1h";
  }
  return jwt.sign(data, JWT_SECRET, options);
};

export const decodeJWT = (token: string): Payload => {
  const decoded = jwt.verify(token, JWT_SECRET);
  if (typeof decoded === "string") {
    throw new Error("Invalid token payload format");
  }
  return decoded as Payload;
};
