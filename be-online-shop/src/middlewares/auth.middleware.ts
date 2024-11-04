import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
export const register = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split("")[1];
  if (!token) return res.status(401).json({ message: "access denied" });

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET as string);
    (req as any).user = decode;
    next();
  } catch (error) {
    res.status(401).json({ message: "invalid token" });
  }
};
