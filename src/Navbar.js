import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faLink,
    faInfoCircle,
    faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" className="nav-item">
                        <p>Home</p>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="nav-item">
                        <p>About</p>
                        <FontAwesomeIcon icon={faInfoCircle} />
                    </Link>
                </li>
                <li>
                    <Link to="/links" className="nav-item">
                        <p>Links</p>
                        <FontAwesomeIcon icon={faLink} />
                    </Link>
                </li>
                <li>
                    <div class="dropdown">
                        <Link to="/projects" class="dropbtn nav-item">
                            <p>Projects &#10095;</p>
                            <FontAwesomeIcon icon={faLaptopCode} />
                        </Link>
                        <div class="dropdown-content">
                            <Link className="slide-in" to="/birthday">
                                Birthdays
                            </Link>
                            <Link className="slide-in" to="/tours">
                                Tours
                            </Link>
                            <Link className="slide-in" to="/players">
                                Players
                            </Link>
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
