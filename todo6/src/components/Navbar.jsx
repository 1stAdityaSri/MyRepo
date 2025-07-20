function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-500 text-white py-2">
        <span className="font-bold text-lg px-4">iTask</span>
        <ul className="flex justify-around w-1/5">
            <li className="cursor-pointer  hover:text-gray-400 transition-all duration-100">Home</li>
            <li className="cursor-pointer  hover:text-gray-400 transition-all duration-100">Your task</li>
        </ul>
    </nav>
  );
}

export default Navbar;
      