import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useRootContext } from "../Context/RootContext";
import NoteItem from "../Components/Note/NoteItem";
import Nodata from "../Components/Nodata/Nodata";
import Header from "../Components/Header/Header";

const Category = () => {
  const { getCategories } = useRootContext();
  const [categoryList, setCategoryList] = useState(null);
  const [loading, setLoading] = useState(true);

  const { color } = useParams();

  useEffect(() => {
    setCategoryList(getCategories(color));
    setLoading(false);
  }, [getCategories, color]);

  return (
    <>
      {!loading && (
        <>
          {categoryList && categoryList.length > 0 ? (
            <>
              <Header notes={categoryList} />

              <div className="flex flex-col">
                {categoryList.map((note) => (
                  <NoteItem note={note} key={note.id} />
                ))}
              </div>
            </>
          ) : (
            <div className="flex h-4/6 justify-center items-center">
              <Nodata />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Category;
