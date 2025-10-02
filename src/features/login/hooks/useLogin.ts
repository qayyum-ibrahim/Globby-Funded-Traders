import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api";
import { LoginCredentials } from "../types";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => loginUser(credentials),
    onSuccess: (data) => {
      login(data.token);
      toast({
        title: "Login successful",
        description: "Welcome back!",
      });
      navigate("/admin");
    },
    onError: () => {
      toast({
        title: "Login failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    },
  });
};
