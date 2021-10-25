const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        notes: [...state.notes, action.payload],
      };

    case "REMOVE_NOTE":
      return {
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case "ADD_CATEGORY":
      return {
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            note.category = action.payload.category;
          }
          return note;
        }),
      };

    case "UPDATE_NOTE":
      return {
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            note = action.payload;
          }
          return note;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
