import BooksRead from "../components/BooksRead";
import CurrentlyReading from "../components/CurrentlyReading";
import WantToRead from "../components/WantToRead";
import useDB from "../store/useDB";
import { STATE_TYPES } from "../constants";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [state, dispatch] = useDB();

  const currentlyReadingBooks = useMemo(
    () => state.filter((book) => book.state === STATE_TYPES.currentlyReading),
    [state]
  );

  const wantToReadBooks = useMemo(() => state.filter((book) => book.state === STATE_TYPES.wantToRead), [state]);

  const readBooks = useMemo(() => state.filter((book) => book.state === STATE_TYPES.read), [state]);

  return (
    <>
      <div>
        <h1 className="title">Welcome to BookShelf App</h1>

        <div className="center">
          <NavLink to="/search">Search for books</NavLink>
        </div>

        <CurrentlyReading state={currentlyReadingBooks} dispatch={dispatch} />
        <WantToRead state={wantToReadBooks} dispatch={dispatch} />
        <BooksRead state={readBooks} dispatch={dispatch} />
      </div>
    </>
  );
};

export default Home;
