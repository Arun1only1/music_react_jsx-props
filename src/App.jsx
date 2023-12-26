import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <Booklist />
    </div>
  );
};

const Booklist = () => {
  return (
    <>
      <Book
        bookName="Rich dad poor dad"
        authorName="Robert T. Kiyosaki"
        bookImage="https://m.media-amazon.com/images/I/51Hfv2MfNGL._SY445_SX342_.jpg"
      />
      <Book
        bookName="Fourth Wing"
        authorName="Rebecca Yaros"
        bookImage="https://m.media-amazon.com/images/I/51MZw40QFKL._SY445_SX342_.jpg"
      />
    </>
  );
};

const Book = (props) => {
  return (
    <>
      <img
        style={{ objectFit: "contain" }}
        width={400}
        height={400}
        src={props.bookImage}
        alt={props.bookName}
      />
      <h4 className="book-name">{props.bookName}</h4>
      <h6>{props.authorName}</h6>
    </>
  );
};
export default App;
