import React from "react";
import Book from "./Book";

const book1 = {
  img: "https://m.media-amazon.com/images/I/811HITbWChL._SY466_.jpg",
  author: "Alex Snodgrass",
  name: "Dinner Tonight",
};

const book2 = {
  img: "https://m.media-amazon.com/images/I/41C-012Es8L._SY445_SX342_.jpg",
  author: "James Clear",
  name: "Atomic Habits",
};

const book3 = {
  img: "https://m.media-amazon.com/images/I/51sx4eLa6NL._SY445_SX342_.jpg",
  author: "Freida McFadden",
  name: "The Housemaid",
};

const BookList = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Book bookDetails={book1} />
      <Book bookDetails={book2} />
      <Book bookDetails={book3} />
    </div>
  );
};

export default BookList;
