import React, { useEffect, useState } from "react";
import clienteAxios from "../../config/axios";
import Header from "../../components/Header";
const Books = () => {
  const [books, setBooks] = useState([]);
  const getBooks = () => {
    clienteAxios
      .get("books")
      .then((res) => {
        console.log(res);
        setBooks(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getBooks();
  }, []);
  console.log(books);
  return <>
  <Header></Header>
  <h1>books</h1>
  </>;
};
export default Books;
