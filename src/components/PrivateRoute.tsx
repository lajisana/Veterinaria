import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/Context';
import { ReactNode } from 'react';

type PrivateRouteProps = {
  children: ReactNode;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}