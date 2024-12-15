import { lazy } from 'react';

const Home = lazy(async () => {
  return await import('./Home');
});

const PageNotFound = lazy(async () => {
  return await import('./PageNotFound');
});

const Login = lazy(async () => {
  return await import('./auth/Login');
});

const Signup = lazy(async () => {
  return await import('./auth/Signup');
});

const Dashboard = lazy(async () => {
  return await import('./Dashboard');
});

export { Home, Login, Signup, PageNotFound, Dashboard };
