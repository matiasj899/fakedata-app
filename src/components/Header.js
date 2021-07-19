import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="Header-cn">
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
