import React, { useEffect, useState } from "react";
import { useRootContext } from "../Context/RootContext";

// COMPONENTS
import NoSearchFound from "../Components/Nodata/NoSearchFound";
import NoteItem from "../Components/Note/NoteItem";

const Search = () => {
  const { state, getSearchedList } = useRootContext();

  const [searchList, setSearchList] = useState(null);

  useEffect(() => {
    setSearchList(getSearchedList());
  }, [getSearchedList, state]);

  return (
    <>
      {searchList && searchList.searchString && <span className="w-auto bg-blue-100 text-blue-600 text-lg font-semibold p-2 px-4">Searching for {`"${searchList.searchString}"`}</span>}

      {searchList && searchList.searchedList && searchList.searchedList.length > 0 ? (
        <>
          <div>
            {searchList.searchedList.map((item) => (
              <NoteItem note={item} key={item.id} />
            ))}
          </div>
        </>
      ) : (
        <NoSearchFound />
      )}
    </>
  );
};

export default Search;
