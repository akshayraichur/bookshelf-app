import { useReducer } from "react";
import database from "../DB/books";

const initialState = [...database];

const ACTION_TYPES = {
  none: "none",
  wantToRead: "wantToRead",
  read: "read",
  currentlyReading: "currentlyReading",
};

const STATE_TYPES = {
  none: "none",
  wantToRead: "wantToRead",
  read: "read",
  currentlyReading: "currentlyReading",
};

const reducer = (state, action) => {
  switch (action.type) {
    // TODO: check the action.payload, in that lets have a id key. check if that is present in the state, then update that state to the latest.
    case ACTION_TYPES.none: {
      let filteredBook = state.find((book) => book.id === action.payload.id);
      if (filteredBook.id) {
        filteredBook.state = STATE_TYPES.none;
      }
      return [...state];
    }
    case ACTION_TYPES.wantToRead: {
      let filteredBook = state.find((book) => book.id === action.payload.id);

      if (filteredBook.id) {
        filteredBook.state = STATE_TYPES.wantToRead;
      }
      return [...state];
    }

    case ACTION_TYPES.read: {
      let filteredBook = state.find((book) => book.id === action.payload.id);

      if (filteredBook.id) {
        filteredBook.state = STATE_TYPES.read;
      }
      return [...state];
    }

    case ACTION_TYPES.currentlyReading: {
      let filteredBook = state.find((book) => book.id === action.payload.id);
      if (filteredBook.id) {
        filteredBook.state = STATE_TYPES.currentlyReading;
      }
      return [...state];
    }
  }
};

const useDB = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};

export default useDB;
