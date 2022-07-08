import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem('auth') ? localStorage.getItem('auth') : false;
  return auth ? children : <Navigate to="/login" replace />;
};
