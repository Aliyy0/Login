import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContex";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
