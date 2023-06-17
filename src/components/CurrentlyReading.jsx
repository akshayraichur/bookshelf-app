import BookCard from "./BookCard";
import PropTypes from "prop-types";

const CurrentlyReading = (props) => {
  return (
    <div className="p-md">
      <h1>Currently Reading</h1>
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

CurrentlyReading.propTypes = {
  state: PropTypes.array,
  dispatch: PropTypes.func,
};

export default CurrentlyReading;
