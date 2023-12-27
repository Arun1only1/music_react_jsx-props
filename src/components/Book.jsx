import React from "react";

const Book = (props) => {
  const { img, author, name } = props.book;

  return (
    <div>
      <img src={img} alt={name} />
      <h3>Name:{name}</h3>
      <h6> Author:{author}</h6>
    </div>
  );
};

export default Book;
