import React from "react";
import { useHistory } from "react-router-dom";
import { useRootContext } from "../../Context/RootContext";

import { SearchIcon } from "@heroicons/react/solid";

const Search = () => {
  const { setSearchedList } = useRootContext();
  const history = useHistory();

  const searchHandler = (e) => {
    const searchString = e.target.value;

    if (searchString === "") {
      // REDIRECT TO HOME PAGE WHEN SEARCH INPUT IS EMPTY

      history.push("/");
    } else {
      // SHOW SEARCH COMPONENT WHEN USER TYPES IN SEARCH INPUT

      history.push("/search");
      setSearchedList(searchString);
    }
  };
  return (
    <div className="search bg-white w-8/12 mt-5 sm:mt-0 xl:w-3/12 lg:w-3/12  sm:w-1/2 flex align-middle pl-2 justify-between rounded-sm">
      <input type="text" className="w-full outline-none text-sm" placeholder="search for notes" onChange={searchHandler} />
      <button className=" py-1.5 px-2">
        <SearchIcon className="w-5 hover:text-blue-700 " />
      </button>
    </div>
  );
};

export default Search;
