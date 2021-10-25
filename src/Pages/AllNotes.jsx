import React, { useEffect, useState } from "react";
import { useRootContext } from "../Context/RootContext";

import { Toaster } from "react-hot-toast";

// COMPONENTS
import NoteItem from "../Components/Note/NoteItem";
import Nodata from "../Components/Nodata/Nodata";
import Header from "../Components/Header/Header";

const AllNotes = () => {
  const { state } = useRootContext();

  const [notes, setNotes] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setNotes(state.notes);
    setLoading(false);
  }, [state]);

  return (
    <>
      {!loading && (
        <>
          <Toaster position="top-right" reverseOrder={false} />
          {notes && notes.length > 0 ? (
            <>
              <Header notes={notes} />

              <div className="flex flex-col">
                {notes.map((note) => (
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

export default AllNotes;
