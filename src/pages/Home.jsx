import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title"> Welcome to the Online Library</h1>
      <p className="home-description">
        Explore a vast collection of books from different genres and immerse yourself in the world of knowledge.
      </p>
      <Link to="/books" className="home-button">Browse Books</Link>
    </div>
  );
};

export default Home;
