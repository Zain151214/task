import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Navbar } from './components';

const Layout = () => {
  return (
    <>
      <ToastContainer />

      <div className="mb-[75px]">
        <Navbar />
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
