import { useEffect, useState } from "react";
import useDB from "../store/useDB";
import BookCard from "../components/BookCard";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [state, dispatch] = useDB();
  const [searchedBook, setSearchedBook] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");

  const handleSearchInputChange = (e) => {
    if (e.target.value.trim() === "") {
      setSearchedBook({});
    }

    setSearchTerm(e.target.value.trim());
  };

  console.log(state);

  useEffect(() => {
    if (searchTerm === "") {
      setSearchedBook([]);
    } else {
      let filteredBook = state.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

      if (filteredBook.length) {
        setSearchedBook([...filteredBook]);
        setError("");
      } else {
        setError("No book found");
      }
    }
  }, [searchTerm, state]);

  return (
    <div className="search-page">
      <div className="search-container">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          👈🏻 Go back
        </NavLink>
        <br />
        <br />
        <input
          type="text"
          placeholder="Search a book...."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <small>Hint: Try: Sita, Atomic Habits, Mindset & hit enter when ready to search</small>

        <br />
        {searchTerm && (
          <div>
            <p>You have searched for: {searchTerm}</p>
          </div>
        )}
        <br />
        {error && <p>Something went wrong {error}</p>}
        {searchTerm && !error && (
          <>
            <p>Results</p>
            <div className="common-container">
              {searchedBook.map((item) => (
                <BookCard
                  key={item.id}
                  thumbnail={item.thumbnail}
                  title={item.title}
                  author={item.author}
                  rating={item.rating}
                  id={item.id}
                  state={item.state}
                  category={item.category}
                  dispatch={dispatch}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Search;
