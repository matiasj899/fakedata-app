import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="Header-cn">
      <div id='home-cn'>
      <Link to="/">Home</Link>
      </div>
      <ul>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
