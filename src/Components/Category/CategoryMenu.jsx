import React from "react";
import uuid from "react-uuid";

import toast from "react-hot-toast";

import { useRootContext } from "../../Context/RootContext";

import { CheckCircleIcon } from "@heroicons/react/outline";

const CategoryMenu = ({ id, setToggleCategory }) => {
  const { addCategory, categoryList } = useRootContext();

  // ADD CATEGORY TO NOTE
  const categoryHandler = (e) => {
    addCategory({ id, category: e });
    setToggleCategory((prev) => !prev);
    toast.success(`Note is added to ${e} category.`, {
      style: {
        borderRadius: "2px",
        padding: "16px",
        color: `${e === "pink" ? "#F472B6" : e}`,
        borderLeft: `5px solid ${e === "pink" ? "#F472B6" : e}`,
      },
      iconTheme: {
        primary: `${e === "pink" ? "#F472B6" : e}`,
        secondary: "#FFFAEE",
      },
    });
  };

  return (
    <>
      {categoryList.map((item) => (
        <li
          className={`flex items-center justify-start pl-5 py-2 hover:bg-gray-100 cursor-pointer text-sm `}
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
