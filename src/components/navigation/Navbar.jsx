import Button from '../global/Button';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-500 p-5 top-0 fixed w-full text-white flex justify-between items-center z-20">
      <div
        className="font-bold select-none bg-black text-white rounded-md p-2 cursor-pointer"
        onClick={() => navigate('/')}
      >
        LOGO
      </div>

      <div className="flex items-center gap-5">
        <Button title={'Login'} onClick={() => navigate('/auth/login')} />

        <Button title={'Signup'} onClick={() => navigate('/auth/signup')} />
      </div>
    </div>
  );
};

export default Navbar;
