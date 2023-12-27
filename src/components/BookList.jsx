import React from "react";
import Book from "./Book";
import { bookList } from "../../data";

const BookList = () => {
  return (
    <div>
      {bookList.map((item) => {
        return <Book key={item.id} book={item} />;
      })}
    </div>
  );
};

export default BookList;
