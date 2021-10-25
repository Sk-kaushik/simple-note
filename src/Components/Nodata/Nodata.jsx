import { PlusIcon, CollectionIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

const Nodata = (props) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <CollectionIcon className="w-48 text-gray-600 " />
      <h1 className="font-bold text-3xl text-gray-600 mb-5">No Notes</h1>
      <Link to="/note">
        <div className="w-32 text-white flex items-center px-3 py-2 bg-blue-700 rounded-sm hover:bg-blue-800">
          <PlusIcon className="w-5 text-white mr-2" />
          Add Note
        </div>
      </Link>
    </div>
  );
};

export default Nodata;
