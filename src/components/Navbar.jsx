import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "static/images/logo/logon.png";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <nav>
                {/* desktop nav */}
                <div className="navbar">
                    <div className="navbar__img">
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <img src={Logo} alt="company-logo" />
                        </Link>
                    </div>
                    {/* links */}
                    <ul className="navbar__links">
                        <li>
                            <Link className="home-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="about-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="models-link" to="/models">
                                Vehicle Models
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="testi-link" to="/testimonials">
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="team-link" to="/team">
                                Our Team
                            </Link>
                        </li>
                        <li>
                            {" "}
                            <Link className="contact-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>

                    {/* nav buttons */}
                    <div className="navbar__buttons">
                        <Link
                            className="navbar__buttons__sign-in"
                            to="/contact"
                        >
                            Sign In
                        </Link>
                        <Link
                            className="navbar__buttons__register"
                            to="/contact"
                        >
                            Register
                        </Link>
                    </div>

                    {/* mobile hamburger */}
                    <div className="mobile-hamb" onClick={openNav}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>

                {/* mobile nav */}
                <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                    <div className="mobile-navbar__close" onClick={openNav}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    {/* links */}
                    <ul className="mobile-navbar__links">
                        <li>
                            <Link onClick={openNav} to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/models">
                                Models
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/testimonials">
                                Testimonials
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/team">
                                Our Team
                            </Link>
                        </li>
                        <li>
                            <Link onClick={openNav} to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
