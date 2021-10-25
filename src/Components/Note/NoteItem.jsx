import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRootContext } from "../../Context/RootContext";

import toast from "react-hot-toast";

// COMPONENT
import CategoryMenu from "../Category/CategoryMenu";

import { TrashIcon, TagIcon } from "@heroicons/react/outline";

const NoteItem = ({ note }) => {
  const [toggleCategory, setToggleCategory] = useState(false);

  const { removeNote } = useRootContext();

  const deleteHandler = () => {
    removeNote(note.id);
    toast.success(`Note deleted successfully.`);
  };

  const toggleCategoryMenu = () => {
    setToggleCategory((prev) => !prev);
  };

  return (
    <div className="w-full bg-white py-4 px-4 flex justify-between items-center rounded-sm mt-5 relative">
      <Link to={`/note/${note.id}`} className="w-full">
        <div className="flex flex-col ">
          <span className="capitalize font-medium">{note.noteTitle}</span>
          <span className="text-gray-500 text-sm mt-2">{note.createdAt}</span>
        </div>
      </Link>

      <div className="w-20 flex-grow-0 flex justify-around relative">
        {/* <PencilIcon className="w-9 p-2 hover:bg-blue-100 hover:text-blue-600 rounded-sm" /> */}
        <TrashIcon className="w-9 p-2 hover:bg-red-100 hover:text-red-600 rounded-sm " onClick={deleteHandler} />
        <TagIcon className={`w-9 p-2 hover:bg-green-100 hover:text-green-800 rounded-sm ${toggleCategory && "bg-green-100"}`} onClick={toggleCategoryMenu} />

        <div className={`absolute top-10 right-1 ${toggleCategory ? "block" : "hidden"} z-50 `}>
          <ul className={`bg-white w-48 py-2 z-50`}>
            <CategoryMenu id={note.id} setToggleCategory={setToggleCategory} />
          </ul>
        </div>
      </div>

      <span className={`absolute top-0 right-0  w-1  h-full bg-${note.category}-400`}></span>
    </div>
  );
};

export default NoteItem;
