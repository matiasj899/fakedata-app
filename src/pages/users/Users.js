import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import clienteAxios from "../../config/axios";
import ListOfBooks from "../books/ListOfBooks";
const Users = () => {
  const value = 100;
  const limit = value / 10 - 1;
  let limitArray = [];
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const getUsers = () => {
    clienteAxios
      .get(`users?_quantity=${value}`)
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUsers();
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
  let page = users.slice(0, 10);
  if (currentPage > 0) {
    const start = currentPage * 10;
    const end = start + 10;
    page = users.slice(start, end);
  }

  const listOfBooks = page.map((book) => (
    <ListOfBooks key={book.isbn || book.uuid} book={book}></ListOfBooks>
  ));
 console.log(users)
  return (
    <div>
      <Header></Header>
      <div id="ListOfBooks-main">
        <h1>List of users:</h1>
        <div id="ListOfBooks-cn">
        <div className="staticList-cn">
            <ul>
              <li>Full name</li>
              <li>Username</li>
              <li>Email</li>
              <li>Password</li>
              <li>Website</li>
              <li>Ip</li>
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
    </div>
  );
};
export default Users;
