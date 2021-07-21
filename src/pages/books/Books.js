import React, { useEffect, useState } from "react";
import clienteAxios from "../../config/axios";
import Header from "../../components/Header";
import ListOfBooks from "./ListOfBooks";
const Books = ({props}) => {
  console.log(props)
  const value = 100;
  const limit = value / 10 - 1;
  let limitArray = [];
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  const getBooks = () => {
    clienteAxios
      .get(`books?_quantity=${value}`)
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
  function changePageByNumber(e) {
    setCurrentPage(Number(e.target.value));
  }
  function prevPage() {
    setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
  }
  for (let index = 0; index < limit; index++) {
    limitArray.push(index);
  }
  let page = books.slice(0, 10);
  if (currentPage > 0) {
    const start = currentPage * 10;
    const end = start + 10;
    page = books.slice(start, end);
  }
  console.log(currentPage);
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
        <div id="buttons-cn">
          {currentPage === 0  ? null : (
            <button className="next-and-prev-btn" onClick={prevPage}>
              Prev page
            </button>
          )}
          {limitArray.map((eachNumber) => {
            return (
              <button
                className="number-btn"
                key={eachNumber}
                value={Number(eachNumber + 1)}
                onClick={changePageByNumber}
              >
                {eachNumber + 1}
              </button>
            );
          })}
          {currentPage === limit ? null : (
            <button className="next-and-prev-btn" onClick={nextPage}>
              Next page
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default Books;
