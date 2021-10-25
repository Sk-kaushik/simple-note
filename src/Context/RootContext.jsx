import { createContext, useContext, useEffect, useReducer, useState } from "react";

import reducer from "./reducer";

const intialState = {
  notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [],
};

const categoryList = ["pink", "red", "green", "blue", "purple"];

export const RootContext = createContext();

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

  const getCategories = (itemCategory) => {
    const category = state.notes.filter((item) => item.category.toLowerCase() === itemCategory);
    return category;
  };

  const setSearchedList = (searchString) => {
    const searchedList = state.notes.filter((item) => item.noteTitle.toLowerCase().indexOf(searchString.toLowerCase()) >= 0);
    setSearchList({ searchedList, searchString });
  };

  const getSearchedList = () => {
    return searchList;
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state.notes));
  }, [state]);

  return <RootContext.Provider value={{ state, categoryList, addNote, removeNote, addCategory, updateNote, getCategories, setSearchedList, getSearchedList }}>{props.children}</RootContext.Provider>;
};
