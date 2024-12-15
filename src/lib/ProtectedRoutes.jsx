import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user') ?? 'null');

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoutes;
