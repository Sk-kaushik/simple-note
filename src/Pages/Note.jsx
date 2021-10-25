import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useRootContext } from "../Context/RootContext";

import moment from "moment";
import uuid from "react-uuid";
import toast, { Toaster } from "react-hot-toast";

const Note = () => {
  const { state, addNote, updateNote } = useRootContext();
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  // GET ID FROM URL
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState(null);
  const [category, setCategory] = useState("");

  // TO UPDATE THE INPUT FIELDS (UPDATE NOTE)

  useEffect(() => {
    // GET DATA IF USER CLICKED ON A NOTE TO EDIT
    const currentNote = state.notes.find((note) => note.id === id);

    // SET STATE IF NOTE IS FOUND
    if (currentNote) {
      setTitle(currentNote.noteTitle);
      setContent(currentNote.noteDes);
      setCreatedAt(currentNote.createdAt);
      setCategory(currentNote.category);
    }

    setLoading(false);
  }, [setTitle, setContent, setCreatedAt, id, state]);

  const updateHandler = () => {
    const noteTitle = title;
    const noteDes = content;

    // GETTING CURRENT DATE AND TIME
    const createdAt = moment().format("MMM Do, h:mm ");

    if (noteTitle !== "" || noteDes !== "") {
      const note = { id, noteTitle, noteDes, createdAt, category };

      updateNote(note);
      toast.success("Note updated successfully");
    }
  };

  const saveNoteHandler = () => {
    const noteId = uuid();
    const noteTitle = title;
    const noteDes = content;
    const createdAt = moment().format("MMM Do, h:mm ");

    if (noteTitle !== "" || noteDes !== "") {
      const note = { id: noteId, noteTitle, noteDes, createdAt, category };

      addNote(note);

      toast.success("Note saved successfully");
    }
  };

  // GO BACK TO PREVIOUS PAGE WHEN CANCEL BUTTON IS CLICKED
  const cancelHandler = () => {
    history.goBack();
  };

  return (
    <div className="w-full flex flex-col h-5/6 sm:h-full text-gray-600 ">
      <Toaster />
      {!loading && (
        <>
          <div className="flex justify-between items-end sm:flex-row  flex-col">
            <input type="text" className="w-full sm:w-1/2 px-2 text-xl py-2 border-0 bg-gray-100  border-b-2 border-gray-200 outline-none capitalize" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />

            {createdAt && <span className="text-gray-500">Created at {createdAt}</span>}
          </div>

          <textarea className="w-full h-4/6 px-2 mt-10 border-0 outline-none bg-gray-100  " placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>

          <div className="flex justify-end pt-10">
            <button className="w-28 text-white flex items-center justify-center py-2 bg-blue-700 rounded-sm hover:bg-blue-800" onClick={!id ? saveNoteHandler : updateHandler}>
              {!id ? <span>Save</span> : <span>Update</span>}
            </button>

            <button className="w-28 text-white flex items-center justify-center py-2 rounded-sm bg-red-500 hover:bg-red-700 ml-7" onClick={cancelHandler}>
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Note;
