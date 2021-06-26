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
          <Link to="#">Projects</Link>
        </li>
        <li>
          <Link to="/reviews">About</Link>
        </li>
        <li>
          <Link to="/tours">Links</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
