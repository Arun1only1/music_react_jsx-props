import React from "react";

const Book = (props) => {
  const { img, author, name } = props.bookDetails;
  return (
    <div
      style={{
        padding: "1rem",
        margin: "2rem",
        borderRadius: "10px",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <img src={img} />
      <h3>{name}</h3>
      <h6>{author}</h6>
    </div>
  );
};

export default Book;
