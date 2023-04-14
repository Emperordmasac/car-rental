import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import HeroCar from "static/images/hero/main-car.png";
import BgShape from "static/images/hero/hero-bg.png";

const Hero = () => {
    const [goUp, setGoUp] = useState(false);

    //scroll to top of page
    const scrollToTop = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
    };

    //
    const bookBtn = () => {
        document
            .querySelector("#booking-section")
            .scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const onPageScroll = () => {
            if (window.pageYOffset > 600) {
                setGoUp(true);
            } else {
                setGoUp(false);
            }
        };
        window.addEventListener("scroll", onPageScroll);

        return () => {
            window.removeEventListener("scroll", onPageScroll);
        };
    }, []);

    return (
        <>
            <section id="home" className="hero-section">
                <div className="container">
                    <img src={BgShape} alt="bg-shape" className="bg-shape" />
                    <div className="hero-content">
                        {/* texts */}
                        <div className="hero-content__text">
                            <h4>Plan your trip now</h4>
                            <h1>
                                Save <span>big</span> with our car rental
                            </h1>
                            <p>
                                Rent the car of your dreams. Unbeatable prices,
                                unlimited miles, flexible pick-up options and
                                much more.
                            </p>
                            {/* buttons */}
                            <div className="hero-content__text__btns">
                                <Link
                                    to="/"
                                    onClick={bookBtn}
                                    className="hero-content__text__btns__book-ride"
                                >
                                    Book Ride &nbsp;{" "}
                                    <i className="fa-solid fa-circle-check"></i>
                                </Link>
                                <Link
                                    to="/"
                                    className="hero-content__text__btns__learn-more"
                                >
                                    Learn More &nbsp;{" "}
                                    <i className="fa-solid fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>

                        {/* image */}
                        <img
                            src={HeroCar}
                            alt="hero-img"
                            className="hero-content__hero-img"
                        />
                    </div>
                </div>

                {/* page up arrow */}
                <div
                    onClick={scrollToTop}
                    className={`scroll-up ${goUp ? "show-scroll" : ""}`}
                >
                    <i className="fa-solid fa-angle-up"></i>
                </div>
            </section>
        </>
    );
};

export default Hero;
