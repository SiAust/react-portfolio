import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <div class="dropdown">
                            <Link to="/projects" class="dropbtn">
                                Projects
                                <FontAwesomeIcon
                                    icon={faChevronDown}
                                    style={{
                                        fontSize: ".6rem",
                                        margin: ".3rem",
                                    }}
                                />
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
            </div>
        </nav>
    );
};

export default Navbar;
