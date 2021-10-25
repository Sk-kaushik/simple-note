import React from "react";
import Searchbar from "../Search/Searchbar";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-700 py-4 px-10 flex flex-col sm:flex-row items-center sm:justify-between align-middle absolute">
      <span className="text-lg text-white font-bold my-auto">Simple Notes</span>
      <Searchbar />
    </nav>
  );
};

export default Navbar;
