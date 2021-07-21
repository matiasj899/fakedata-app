import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
const Home = () => {
  return (
    <>
      <Header></Header>
      <div id="ListOfBooks-main">
        <h1>List of:</h1>

        <ul className="home-ul">
          <li className="home-li">
            <Link to="/books">Books</Link>
          </li>
          <li className="home-li">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Home;
