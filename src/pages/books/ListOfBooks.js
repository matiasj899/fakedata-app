import React from "react";

const ListOfBooks = ({ book }) => {
  
  return (
    <div className="books-cn">
        <div className="img-and-title">
      <img src={book.image}></img>
      <h1>{book.title || book.firstname + " " + book.lastname}</h1>
        </div>
      <p>{book.author}</p>
      <p>{book.genre}</p>
      <p>{book.description}</p>
      <p>{book.publisher}</p>
      <p>{book.published}</p>
    </div>
  );
};
export default ListOfBooks;
