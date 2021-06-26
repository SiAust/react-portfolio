import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div class="dropdown">
            <button class="dropbtn">Projects</button>
            <div class="dropdown-content">
              <Link to="/birthday">Birthdays</Link>
              <Link to="/tours">Tours</Link>
              <Link to="/reviews">Reviews</Link>
            </div>
          </div>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/links">Links</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
