import { IMAGES } from '../assets/images';

const Home = () => {
  return (
    <div className="relative w-full">
      <div>
        <img
          src={IMAGES.Main}
          alt="Main Image"
          className="w-full h-[calc(100vh-75px)]"
        />
      </div>

      <div className="absolute z-10 top-0 w-full h-[calc(100vh-75px)] flex justify-center items-center">
        <div className="text-white font-bold text-md md:text-2xl select-none max-w-fit">
          <h1 className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-white pr-2 animate-typing w-fit">
            Welcome to Full Stack Assessment Task
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
