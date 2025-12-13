import { apiClient } from "./client";

export const loginApi = (email: string, password: string) =>
  apiClient("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

export const registerApi = (
  name: string,
  email: string,
  password: string
) =>
  apiClient("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
