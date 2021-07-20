import React, { useEffect, useState } from "react";
import clienteAxios from "../../config/axios";
import Header from "../../components/Header";
import ListOfBooks from "./ListOfBooks";
const Books = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getBooks = () => {
    clienteAxios
      .get("books?_quantity=100")
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

  function prevPage() {
    setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }
  let page = books.slice(0, 10);
  if (currentPage > 0) {
    const start = currentPage * 10;
    const end = start + 10;
    page = books.slice(start, end);
  }

  const listOfBooks = page.map((book) => (
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
        <div>
          {currentPage === 0 ? null : (
            <button onClick={prevPage}>Prev page</button>
          )}
          {currentPage === 9 ? null : (
            <button onClick={nextPage}>Next page</button>
          )}
        </div>
      </div>
    </>
  );
};
export default Books;
