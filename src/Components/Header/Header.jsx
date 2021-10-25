import React from "react";
import { Link } from "react-router-dom";

import { PlusIcon } from "@heroicons/react/outline";

const Header = ({ notes }) => {
  return (
    <div className="flex justify-between items-center  mb-5 ">
      <span className="text-gray-600 ">Total Notes: {notes.length}</span>
      <Link to="/note">
        <div className="w-auto text-white flex items-center px-3 py-2 bg-blue-700 rounded-sm hover:bg-blue-800">
          <PlusIcon className="w-5 text-white mr-2" />
          Add Note
        </div>
      </Link>
    </div>
  );
};

export default Header;
