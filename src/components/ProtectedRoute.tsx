import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { token } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toast("Expired token. Please login.");
      navigate("/login");
    }
  }, [navigate, token]);

  const useLogout = () => {
    toast("logging admin out...");
    setTimeout(() => {
      try {
        logout();
        navigate("/");
        toast.success("logged out.");
      } catch (err) {
        toast.error(err.message);
      }
      // Clear any stored auth data here
    }, 2000);
  };

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
