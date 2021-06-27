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
            <Link to="/projects" class="dropbtn">
              Projects
            </Link>
            <div class="dropdown-content">
              <Link className="slide-in" to="/birthday">
                Birthdays
              </Link>
              <Link className="slide-in" to="/tours">
                Tours
              </Link>
              <Link className="slide-in" to="/reviews">
                Reviews
              </Link>
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
