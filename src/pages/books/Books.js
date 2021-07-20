import React, { useEffect, useState } from "react";
import clienteAxios from "../../config/axios";
import Header from "../../components/Header";
import ListOfBooks from "./ListOfBooks";
const Books = () => {
  const [books, setBooks] = useState([]);
  const getBooks = () => {
    clienteAxios
      .get("books")
      .then((res) => {
        console.log(res);
        setBooks(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getBooks();
  }, []);
  console.log(books);
  const listOfBooks = books.map((book) => (
    <ListOfBooks key={book.isbn} book={book}></ListOfBooks>
  ));
  return (
    <>
      <Header></Header>

      <div id="ListOfBooks-main">
        <h1>List of books:</h1>
        
        <div id="ListOfBooks-cn">
        <div className="staticList-cn">
            <ul>
              <li>Title</li>
              <li>Author</li>
              <li>Genre</li>
              <li>Description</li>
              <li>Publisher</li>
              <li>Published</li>
            </ul>
          </div>
          {listOfBooks}
        </div>
      </div>
    </>
  );
};
export default Books;
