import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <ul className="footer-content__1">
                            <li>
                                <span>KINGS</span> RIDE
                            </li>

                            <li>
                                We have the perfect car to meet your needs. We
                                offers a big range of vehicles for all your
                                driving needs.
                            </li>

                            <li>
                                <a href="tel:123456789">
                                    <i className="fa-solid fa-phone"></i>
                                    (090) 398-752-50
                                </a>
                            </li>
                            <li>
                                <a href="mailto:carrental@gmail.com">
                                    <i className="fa-solid fa-envelope"></i>
                                    kingsride@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/Emperordmasac"
                                    rel="noreferrer"
                                    style={{ fontSize: "14px" }}
                                    target="_blank"
                                >
                                    <b>Designed by SNOW.Dev</b>
                                </a>
                            </li>
                        </ul>

                        <ul className="footer-content__2">
                            <li>Company</li>
                            <li>
                                <a href="#home">Teams</a>
                            </li>
                            <li>
                                <a href="#home">Careers</a>
                            </li>
                            <li>
                                <a href="#home">Mobile</a>
                            </li>
                            <li>
                                <a href="#home">Blog</a>
                            </li>
                            <li>
                                <a href="#home">How we work</a>
                            </li>
                        </ul>

                        <ul className="footer-content__2">
                            <li>Working Hours</li>
                            <li>Mon - Fri: 9:00AM - 9:00PM</li>
                            <li>Sat: 9:00AM - 10:00PM</li>
                            <li>Sun: Closed</li>
                        </ul>

                        <ul className="footer-content__2">
                            <li>Subscription</li>
                            <li>
                                <p>
                                    Stay in the loop with our latest News &
                                    Updates.
                                </p>
                            </li>
                            <li>
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                ></input>
                            </li>
                            <li>
                                <button className="submit-email">Submit</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
