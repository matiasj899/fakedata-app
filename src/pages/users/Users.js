import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import clienteAxios from "../../config/axios";
import ListOfBooks from "../books/ListOfBooks";
const Users = () => {
  const value=100
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
  function prevPage() {
    setCurrentPage(currentPage - 1);
  }
  function nextPage() {
    setCurrentPage(currentPage + 1);
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
          {listOfBooks}</div>
        <div>
          <button onClick={prevPage}>Anterior pagina</button>
          <button onClick={nextPage}>Siguiente pagina</button>
        </div>
      </div>
    </div>
  );
};
export default Users;
