import React, { useState } from "react";

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Classic" },
  { id: 2, title: "1984", author: "George Orwell", category: "Dystopian" },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Classic" },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", category: "Romance" },
  { id: 5, title: "Moby-Dick", author: "Herman Melville", category: "Adventure" },
  { id: 6, title: "War and Peace", author: "Leo Tolstoy", category: "Historical" },
];

const categories = ["All", "Classic", "Dystopian", "Romance", "Adventure", "Historical"];

const BrowseBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter books based on search and category
  const filteredBooks = books.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="browse-books-container">
      <h2 className="section-title">📖 Browse Books</h2>

      {/* 🔎 Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* 📂 Category Filter */}
      <select className="category-filter" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      {/* 📚 Books List */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <span className="category-label">{book.category}</span>
              <a href={`/book/${book.id}`} className="button">View Details</a>
            </div>
          ))
        ) : (
          <p className="no-books-message">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
