import { SearchIcon } from "@heroicons/react/solid";
import React from "react";

const NoSearchFound = () => {
  return (
    <div className="flex h-4/6 flex-col justify-center items-center ">
      <SearchIcon className="w-48 text-gray-600 " />
      <h1 className="font-bold text-3xl text-gray-600 mb-5">No Data Found.</h1>
    </div>
  );
};

export default NoSearchFound;
