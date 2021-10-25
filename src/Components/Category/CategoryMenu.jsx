import React from "react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import uuid from "react-uuid";
import { useRootContext } from "../../Context/RootContext";

const CategoryMenu = ({ id, setToggleCategory, paddingLeft }) => {
  const { addCategory, categoryList } = useRootContext();

  const categoryHandler = (e) => {
    addCategory({ id, category: e });
    setToggleCategory((prev) => !prev);
  };

  return (
    <>
      {categoryList.map((item) => (
        <li
          className={`flex items-center justify-start pl-${paddingLeft} py-2 hover:bg-gray-100 cursor-pointer text-sm `}
          onClick={() => {
            categoryHandler(item);
          }}
          key={uuid()}
        >
          <CheckCircleIcon className={`w-4 text-${item}-400 mr-3`} />
          <span className="capitalize">{item} Category</span>
        </li>
      ))}
    </>
  );
};

export default CategoryMenu;
