import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>📚 Online Library</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/books">Browse Books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
