import jwt from "jsonwebtoken";

export interface JwtPayload {
  id: string;
  role: string;
}

export const generateToken = (id: string, role: string) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
};
