import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && description && rating) {
      dispatch(addBook({ title, author, description, rating: parseFloat(rating) }));
      navigate("/books");
    }
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Book Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            placeholder="Short Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="number"
            placeholder="Rating (1-5)"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn" disabled={!title || !author || !description || !rating}>
          Add Book
        </button>
      </form>

      <div className="action-buttons">
        <button className="btn btn-back" onClick={() => navigate("/books")}>Back to Books</button>
        <button className="btn btn-cancel" onClick={() => navigate("/")}>Cancel</button>
      </div>
    </div>
  );
};

export default AddBook;
