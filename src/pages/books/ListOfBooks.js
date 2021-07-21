import React from "react";

const ListOfBooks = ({ book }) => {
  return (
    <div className="books-cn">
      <div className="img-and-title">
        <img src={book.image} alt={book.title || book.firstname}></img>
        <h1>{book.title || book.firstname + " " + book.lastname}</h1>
      </div>
      <p>{book.author || book.username}</p>
      <p>{book.genre || book.email}</p>
      <p>{book.description || book.password}</p>
      <p>{book.publisher || book.website}</p>
      <p>{book.published || book.ip}</p>
    </div>
  );
};
export default ListOfBooks;
