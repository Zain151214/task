const Button = ({ title, onClick, style }) => {
  return (
    <button
      className="border-2 border-black rounded-md px-2 py-1 outline-none hover:bg-black hover:text-white font-semibold min-w-20 flex items-center justify-center text-center cursor-pointer"
      style={style}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
