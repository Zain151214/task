import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user') ?? 'null');

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default PublicRoutes;
