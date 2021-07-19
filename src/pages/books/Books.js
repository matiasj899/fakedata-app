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
      <h1>books</h1>
      {listOfBooks}
    </>
  );
};
export default Books;
