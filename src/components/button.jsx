function Button({ children }) {
  return (
    <button className="bg-black p-[15px] text-white rounded w-full sm:w-[60%]">
      {children}
    </button>
  );
}

export default Button;
