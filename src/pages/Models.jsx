import React from "react";
import { Link } from "react-router-dom";

import { Footer, HeroPages } from "components";
import CarImg1 from "static/images/cars-big/audi-box.png";
import CarImg2 from "static/images/cars-big/golf6-box.png";
import CarImg3 from "static/images/cars-big/toyota-box.png";
import CarImg4 from "static/images/cars-big/bmw-box.png";
import CarImg5 from "static/images/cars-big/benz-box.png";
import CarImg6 from "static/images/cars-big/passat-box.png";

const Models = () => {
    return (
        <>
            <section className="models-section">
                <HeroPages name="Vehicle Models" />
                <div className="container">
                    <div className="models-div">
                        {/* models box */}
                        <ModelsBox
                            carImg={CarImg1}
                            carName={"Audi A1 "}
                            amount={"37"}
                            duration={"per day"}
                            sName={"Audi"}
                            stock={"4/5"}
                            mode={"Manual"}
                            fuel={"Diesel"}
                        />

                        <ModelsBox
                            carImg={CarImg2}
                            carName={"Golf 6"}
                            amount={"45"}
                            duration={"per day"}
                            sName={"VW"}
                            stock={"4/5"}
                            mode={"Manual"}
                            fuel={"Diesel"}
                        />

                        <ModelsBox
                            carImg={CarImg3}
                            carName={"Toyota"}
                            amount={"30"}
                            duration={"per day"}
                            sName={"Camry"}
                            stock={"4/5"}
                            mode={"Manual"}
                            fuel={"Diesel"}
                        />

                        <ModelsBox
                            carImg={CarImg4}
                            carName={"BMW 320"}
                            amount={"35"}
                            duration={"per day"}
                            sName={"ModernLine"}
                            stock={"4/5"}
                            mode={"Manual"}
                            fuel={"Diesel"}
                        />

                        <ModelsBox
                            carImg={CarImg5}
                            carName={"Mercedes"}
                            amount={"50"}
                            duration={"per day"}
                            sName={"Benz GLK"}
                            stock={"4/5"}
                            mode={"Manual"}
                            fuel={"Diesel"}
                        />

                        <ModelsBox
                            carImg={CarImg6}
                            carName={"VW Passat"}
                            amount={"25"}
                            duration={"per day"}
                            sName={"CC"}
                            stock={"4/5"}
                            mode={"Manual"}
                            fuel={"Diesel"}
                        />
                    </div>
                </div>

                {/* banner  */}
                <div className="book-banner">
                    <div className="book-banner__overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2>Book a car by getting in touch with us</h2>
                            <span>
                                <i className="fa-solid fa-phone"></i>
                                <h3>(123) 456-7869</h3>
                            </span>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <Footer />
            </section>
        </>
    );
};

export default Models;

const ModelsBox = ({
    carImg,
    carName,
    amount,
    duration,
    sName,
    stock,
    mode,
    fuel,
}) => {
    return (
        <>
            <div className="models-div__box">
                <div className="models-div__box__img">
                    <img src={carImg} alt="car_img" />
                    <div className="models-div__box__descr">
                        <div className="models-div__box__descr__name-price">
                            <div className="models-div__box__descr__name-price__name">
                                <p>{carName}</p>
                                <span>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </span>
                            </div>
                            <div className="models-div__box__descr__name-price__price">
                                <h4>${amount}</h4>
                                <p>{duration}</p>
                            </div>
                        </div>
                        <div className="models-div__box__descr__name-price__details">
                            <span>
                                <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                                {sName}
                            </span>
                            <span style={{ textAlign: "right" }}>
                                {stock} &nbsp;{" "}
                                <i className="fa-solid fa-car-side"></i>
                            </span>
                            <span>
                                <i className="fa-solid fa-car-side"></i> &nbsp;{" "}
                                {mode}
                            </span>
                            <span style={{ textAlign: "right" }}>
                                {fuel} &nbsp;{" "}
                                <i className="fa-solid fa-car-side"></i>
                            </span>
                        </div>

                        <div className="models-div__box__descr__name-price__btn">
                            <Link onClick={() => window.scrollTo(0, 0)} to="/">
                                Book Ride
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
