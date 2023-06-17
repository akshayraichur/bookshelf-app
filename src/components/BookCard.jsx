import PropTypes from "prop-types";
import { SELECT_TYPES } from "../constants";

const BookCard = (props) => {
  const { thumbnail, title, author, rating, state, dispatch, id } = props;

  const handleChange = (e) => {
    dispatch({ type: e.target.value, payload: { id } });
  };

  return (
    <div className="book-container">
      <div className="img-container">
        <img src={thumbnail} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Rating: {rating}</p>
      <label htmlFor="select-dropdown">
        <select name="options" id="select-dropdown" defaultValue={state} onChange={handleChange}>
          {Object.keys(SELECT_TYPES).map((item) => (
            <option value={SELECT_TYPES[item]} key={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

BookCard.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.string,
  state: PropTypes.string,
  category: PropTypes.string,
  dispatch: PropTypes.func,
};

export default BookCard;
