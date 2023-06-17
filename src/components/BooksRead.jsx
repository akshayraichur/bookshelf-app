import PropTypes from "prop-types";
import BookCard from "./BookCard";

const BooksRead = (props) => {
  return (
    <div className="p-md">
      <h1>Books Read</h1>
      <hr />
      <div className="common-container">
        {props.state.length ? (
          props.state.map((item) => (
            <BookCard
              title={item.title}
              thumbnail={item.thumbnail}
              key={item.id}
              id={item.id}
              rating={item.rating}
              author={item.author}
              state={item.state}
              dispatch={props.dispatch}
            />
          ))
        ) : (
          <p>No books in this shelf</p>
        )}
      </div>
    </div>
  );
};

BooksRead.propTypes = {
  state: PropTypes.array,
  dispatch: PropTypes.func,
};

export default BooksRead;
