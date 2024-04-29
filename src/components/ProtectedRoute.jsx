import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const ProtectedRoute = () => {
  const { session } = useAuth()

  if (!session) {
    return <Navigate to="/sign-in" replace />
  }

  return <Outlet />
}

export default ProtectedRoute
