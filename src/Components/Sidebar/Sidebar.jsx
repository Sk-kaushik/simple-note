import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import uuid from "react-uuid";

import { useRootContext } from "../../Context/RootContext";

import { ChevronDownIcon, SunIcon, TagIcon, CheckCircleIcon } from "@heroicons/react/outline";

const Sidebar = () => {
  const { categoryList } = useRootContext();

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="w-full sm:w-80 sm:h-screen pt-28 sm:pt-20 bg-gray-200 overflow-y-hidden flex flex-row sm:block">
      <ul className="mt-12 w-full sm:w-auto ">
        <li>
          <NavLink to="/" activeClassName="bg-gray-300" exact className="w-full flex items-stretch align-middle  pl-10 py-3 pr-3 hover:bg-gray-100 text-sm ">
            <SunIcon className="w-5 mr-2" />
            My Notes
          </NavLink>
        </li>
        <li>
          <div className={`w-full flex items-stretch justify-between align-middle pl-10 py-3 pr-3 hover:bg-gray-100 text-sm `} onClick={(e) => setToggleMenu((prev) => !prev)}>
            <span className="flex">
              <TagIcon className="w-5 mr-2 pl-1" />
              Category
            </span>
            <ChevronDownIcon className="w-5" />
          </div>

          {/* CATEGORY MENU IN SIDEBAR */}
          <ul className={`flex flex-col transition-all duration-300 ease-in-out bg-gray-100 ${!toggleMenu ? "max-h-0  " : "max-h-60  "} overflow-hidden `}>
            {categoryList.map((item) => (
              <li className={`flex items-center justify-start hover:bg-gray-300 cursor-pointer text-sm`} key={uuid()}>
                <NavLink to={`/category/${item}`} className="flex w-full h-full py-2  pl-14" activeClassName="bg-gray-300">
                  <CheckCircleIcon className={`w-4 text-${item}-400 mr-3`} />
                  <span className="capitalize">{item} Category</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
