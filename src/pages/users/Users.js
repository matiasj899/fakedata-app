import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import clienteAxios from "../../config/axios";
import ListOfBooks from "../books/ListOfBooks";
const Users = () => {
  const [users, setUsers] = useState([]);
const [page,setPage]=useState([])
  const getUsers = () => {
    clienteAxios
      .get(`users?_quantity=100`)
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
  let Currentpage=users.slice(0,10)
  console.log(Currentpage)
  const listOfBooks = Currentpage.map((book) => (
    <ListOfBooks key={book.isbn || book.uuid} book={book}></ListOfBooks>
  ));
  function prevPage() {
    console.log("prev");
  }
  function nextPage() {}
  return (
    <div>
      <Header></Header>
      <div id="ListOfBooks-main">
        <h1>List of users:</h1>
        <div id="ListOfBooks-cn">{listOfBooks}</div>
        <div>
          <button onClick={prevPage}>Anterior pagina</button>
          <button onClick={nextPage}>Siguiente pagina</button>
        </div>
      </div>
    </div>
  );
};
export default Users;
