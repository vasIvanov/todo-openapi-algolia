import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const config = process.env;

interface IAuthRequest extends Request {
  user?: any;
}

const verifyToken = (req: IAuthRequest, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY ?? "");
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;
