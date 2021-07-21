import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
const Home = () => {
  return (
    <>
      <Header></Header>
      <div id="ListOfBooks-main">
        <h1>List of:</h1>

        <ul>
            <li><Link to='/books'>Books</Link></li>
            <li><Link to='/users'>users</Link></li>
        </ul>
        
        
      </div>
    </>
  );
};
export default Home;
