import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[90px] md:h-[120px] fixed top-4 p-4">
      <div className="glass-effect w-full h-full rounded-lg shadow-xl flex justify-between items-center pl-8 pr-8">
        <div className="w-fit rounded-full overflow-hidden">
          <img className="w-36" src="Assets/Logo-transparent.png" alt="/" />
        </div>
        <div>
          <ul className="flex gap-16 text-[#61dafb] text-2xl font-bold">
            <li className="hover:text-white duration-500">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-white duration-500">
              <a href="/About">About</a>
            </li>
            <li className="hover:text-white duration-500">
              <a href="/#Skills">Skills</a>
            </li>
            <li className="hover:text-white duration-500">
              <a href="/#Contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
