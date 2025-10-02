import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

interface LoggedInRouteProps {
  component: React.ComponentType<any>;
}

const LoggedInRoute: React.FC<LoggedInRouteProps> = ({ component: Component }) => {
  const { state: { user, loading } } = useAuth();
  const location = useLocation();

  if (loading) {
    return null;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Component />;
};

export default LoggedInRoute;
