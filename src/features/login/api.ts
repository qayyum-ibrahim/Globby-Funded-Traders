import { LoginCredentials, LoginResponse } from "./types";
import { api } from "@/lib/axios";

export const loginUser = async (
  credentials: LoginCredentials
): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", {
    email: credentials.email,
    password: credentials.password,
  });
  return response.data;
};
