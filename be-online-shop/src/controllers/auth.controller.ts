import { Request, Response } from "express";
import authService from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const user = await authService.register({ name, email, password });
    res.status(201).json({ massage: "User Register Successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.massage });
  }
};
