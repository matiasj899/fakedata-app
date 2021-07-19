import React from "react";

const ListOfBooks = ({ book }) => {
  console.log(book);
  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.image}></img>
    </div>
  );
};
export default ListOfBooks;
