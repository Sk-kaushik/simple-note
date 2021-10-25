import { createContext, useContext, useEffect, useReducer, useState } from "react";

import reducer from "./reducer";

const intialState = {
  // GETTING NOTES FROM LOCAL STORAGE IF FOUND OR SETTING NOTES TO EMPTY ARRAY IF LOCAL STORAGE IS EMPTY
  notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [],
};

// CUSTOM LIST FOR CATEGORIES
const categoryList = ["pink", "red", "green", "blue", "purple"];

export const RootContext = createContext();

// FUNCTION FOR USING CONTEXT TO NOT TO PASS CONTEXT ON EVERY COMPONENT TO GET DATA
export const useRootContext = () => {
  return useContext(RootContext);
};

export const RootContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  const [searchList, setSearchList] = useState(null);

  const addNote = (payload) => {
    dispatch({ type: "ADD_NOTE", payload: payload });
  };

  const removeNote = (payload) => {
    dispatch({ type: "REMOVE_NOTE", payload: payload });

    // REMOVE NOTE OBJECT FROM SEARCH LIST ARRAY ON DELETE BUTTON CLICKED
    if (searchList) {
      const searchedList = searchList.searchedList.filter((item) => item.id !== payload);
      const searchString = searchList.searchString;
      setSearchList({ searchedList, searchString });
    }
  };

  const addCategory = (payload) => {
    dispatch({ type: "ADD_CATEGORY", payload });
  };

  const updateNote = (payload) => {
    dispatch({ type: "UPDATE_NOTE", payload });
  };

  // GET NOTE WITH SPECIFIC CATEGORY BY PASSING CATEGORY NAME
  const getCategories = (itemCategory) => {
    const category = state.notes.filter((item) => item.category.toLowerCase() === itemCategory);
    return category;
  };

  // FINDING NOTE WHICH CONTAIN SEARCH STRING (CHARACTER OF SEARCH BOX)
  const setSearchedList = (searchString) => {
    const searchedList = state.notes.filter((item) => item.noteTitle.toLowerCase().indexOf(searchString.toLowerCase()) >= 0);
    setSearchList({ searchedList, searchString });
  };

  // RETURNING SEARCH LIST TO SHOWING THEM IN SEARCH PAGE
  const getSearchedList = () => {
    return searchList;
  };

  useEffect(() => {
    // SAVING DATA IN LOCAL STORAGE WHENEVER STATE GET CHANGED
    localStorage.setItem("notes", JSON.stringify(state.notes));
  }, [state]);

  return <RootContext.Provider value={{ state, categoryList, addNote, removeNote, addCategory, updateNote, getCategories, setSearchedList, getSearchedList }}>{props.children}</RootContext.Provider>;
};
