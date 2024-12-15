import { createBrowserRouter } from 'react-router-dom';
import { Dashboard, Home, Login, PageNotFound, Signup } from './Pages/index.js';
import Layout from './Layout.jsx';
import PublicRoutes from './lib/PublicRoutes.jsx';
import ProtectedRoutes from './lib/ProtectedRoutes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
      {
        path: '/auth/login',
        element: (
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        ),
      },
      {
        path: '/auth/signup',
        element: (
          <PublicRoutes>
            <Signup />
          </PublicRoutes>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
