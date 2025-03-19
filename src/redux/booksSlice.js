import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "1984", author: "George Orwell", category: "Fiction", description: "A dystopian novel about a totalitarian regime.", rating: 4.5 },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", description: "A classic novel set in the 1920s.", rating: 4.7 },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", description: "A story of racial injustice.", rating: 4.9 },
    { id: 4, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", description: "A prequel to The Lord of the Rings.", rating: 4.8 },
    { id: 5, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", description: "A sci-fi epic about interstellar politics.", rating: 4.6 },
    { id: 6, title: "The Silent Patient", author: "Alex Michaelides", category: "Thriller", description: "A psychological thriller with a shocking twist.", rating: 4.4 },
    { id: 7, title: "Sapiens", author: "Yuval Noah Harari", category: "Non-Fiction", description: "A brief history of humankind.", rating: 4.8 },
    { id: 8, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", category: "Self-Help", description: "A counterintuitive guide to living a good life.", rating: 4.3 }
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ id: state.books.length + 1, ...action.payload });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
