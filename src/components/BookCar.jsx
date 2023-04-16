import React, { useState, useEffect } from "react";

import CarAudi from "static/images/cars-big/audia1.jpg";
import CarGolf from "static/images/cars-big/golf6.jpg";
import CarToyota from "static/images/cars-big/toyotacamry.jpg";
import CarBmw from "static/images/cars-big/bmw320.jpg";
import CarMercedes from "static/images/cars-big/benz.jpg";
import CarPassat from "static/images/cars-big/passatcc.jpg";

const BookCar = () => {
    //--active modal state
    const [modal, setModal] = useState(false);

    //--booking car state
    const [carType, setCarType] = useState("");
    const [pickUp, setPickup] = useState("");
    const [dropOff, setDropOff] = useState("");
    const [pickTime, setPickTime] = useState("");
    const [dropTime, setDropTime] = useState("");
    const [carImg, setCarImg] = useState("");

    //--personal info state
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipCode] = useState("");

    //--functions to handle personal info states
    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
    };

    const handlePhone = (e) => {
        setPhone(e.target.value);
    };

    const handleAge = (e) => {
        setAge(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
    };

    const handleZip = (e) => {
        setZipCode(e.target.value);
    };

    //--function to open modal when all inputs are complete
    const openModal = (e) => {
        e.preventDefault();
        const errorMsg = document.querySelector(".error-message");
        if (
            pickUp === "" ||
            dropOff === "" ||
            pickTime === "" ||
            dropTime === "" ||
            carType === ""
        ) {
            errorMsg.style.display = "flex";
        } else {
            setModal(!modal);
            const motalDiv = document.querySelector(".booking-done");
            motalDiv.scroll(0, 0);
            errorMsg.style.display = "none";
        }
    };

    //--function to confirm booking
    const confirmBooking = (e) => {
        e.preventDefault();
        setModal(!modal);
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "flex";
    };

    //--function to hide message
    const hideMessage = () => {
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "none";
    };

    //--function to handle booking inputs
    const handleCarType = (e) => {
        setCarType(e.target.value);
        setCarImg(e.target.value);
    };
    const handlePick = (e) => {
        setPickup(e.target.value);
    };
    const handleDrop = (e) => {
        setDropOff(e.target.value);
    };
    const handlePickTime = (e) => {
        setPickTime(e.target.value);
    };
    const handleDropTime = (e) => {
        setDropTime(e.target.value);
    };

    //--base on the value selected, display an image
    let imgUrl;
    switch (carImg) {
        case "Audi A1 S-Line":
            imgUrl = CarAudi;
            break;
        case "VW Golf 6":
            imgUrl = CarGolf;
            break;
        case "Toyota Camry":
            imgUrl = CarToyota;
            break;
        case "BMW 320 ModernLine":
            imgUrl = CarBmw;
            break;
        case "Mercedes-Benz GLK":
            imgUrl = CarMercedes;
            break;
        case "VW Passat CC":
            imgUrl = CarPassat;
            break;
        default:
            imgUrl = "";
    }

    //--disable page scroll when modal is active
    useEffect(() => {
        if (modal === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modal]);

    return (
        <>
            <section id="booking-section" className="book-section">
                {/* modal overlay */}
                <div
                    onClick={openModal}
                    className={`modal-overlay ${modal ? "active-modal" : ""}`}
                ></div>

                {/* section content */}
                <div className="container">
                    <div className="book-content">
                        <div className="book-content__box">
                            <h2>Book a car</h2>

                            <p className="error-message">
                                All fields required!{" "}
                                <i className="fa-solid fa-xmark"></i>
                            </p>

                            <p className="booking-done">
                                Check your email to confirm an order.{" "}
                                <i
                                    onClick={hideMessage}
                                    className="fa-solid fa-xmark"
                                ></i>
                            </p>

                            {/* form  */}
                            <form className="box-form">
                                {/* select car type */}
                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fa-solid fa-car"></i>{" "}
                                        &nbsp; Select Your Car Type <b>*</b>
                                    </label>
                                    <select
                                        value={carType}
                                        onChange={handleCarType}
                                    >
                                        <option>Select your car type</option>
                                        <option value="Audi A1 S-Line">
                                            Audi A1 S-Line
                                        </option>
                                        <option value="VW Golf 6">
                                            VW Golf 6
                                        </option>
                                        <option value="Toyota Camry">
                                            Toyota Camry
                                        </option>
                                        <option value="BMW 320 ModernLine">
                                            BMW 320 ModernLine
                                        </option>
                                        <option value="Mercedes-Benz GLK">
                                            Mercedes-Benz GLK
                                        </option>
                                        <option value="VW Passat CC">
                                            VW Passat CC
                                        </option>
                                    </select>
                                </div>

                                {/* pickup location */}
                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fa-solid fa-location-dot"></i>{" "}
                                        &nbsp; Pick-up <b>*</b>
                                    </label>
                                    <select
                                        value={pickUp}
                                        onChange={handlePick}
                                    >
                                        <option>Select pick up location</option>
                                        <option>Belgrade</option>
                                        <option>Novi Sad</option>
                                        <option>Nis</option>
                                        <option>Kragujevac</option>
                                        <option>Subotica</option>
                                    </select>
                                </div>

                                {/* drop off location */}
                                <div className="box-form__car-type">
                                    <label>
                                        <i className="fa-solid fa-location-dot"></i>{" "}
                                        &nbsp; Drop-of <b>*</b>
                                    </label>
                                    <select
                                        value={dropOff}
                                        onChange={handleDrop}
                                    >
                                        <option>
                                            Select drop off location
                                        </option>
                                        <option>Novi Sad</option>
                                        <option>Belgrade</option>
                                        <option>Nis</option>
                                        <option>Kragujevac</option>
                                        <option>Subotica</option>
                                    </select>
                                </div>

                                {/* pickup date */}
                                <div className="box-form__car-time">
                                    <label>
                                        <i className="fa-regular fa-calendar-days "></i>{" "}
                                        &nbsp; Pick-up <b>*</b>
                                    </label>
                                    <input
                                        value={pickTime}
                                        onChange={handlePickTime}
                                        id="picktime"
                                        type="date"
                                    />
                                </div>

                                {/* dropoff date */}
                                <div className="box-form__car-time">
                                    <label>
                                        <i className="fa-regular fa-calendar-days "></i>{" "}
                                        &nbsp; Drop-of <b>*</b>
                                    </label>
                                    <input
                                        value={dropTime}
                                        onChange={handleDropTime}
                                        id="droptime"
                                        type="date"
                                    />
                                </div>

                                {/* cta button */}
                                <button type="submit" onClick={openModal}>
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* modal section */}
            <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
                {/* title */}
                <div className="booking-modal__title">
                    <h2>Complete Reservation</h2>
                    <i onClick={openModal} className="fa-solid fa-xmark"></i>
                </div>
                {/* message */}
                <div className="booking-modal__message">
                    <h4>
                        <i className="fa-solid fa-circle-info"></i> Upon
                        completing this reservation enquiry, you will receive:
                    </h4>
                    <p>
                        Your rental voucher to produce on arrival at the rental
                        desk and a toll-free customer support number.
                    </p>
                </div>
                {/* car info */}
                <div className="booking-modal__car-info">
                    {/* booking info */}
                    <div className="dates-div">
                        <div className="booking-modal__car-info__dates">
                            <h5>Location & Date</h5>
                            <span>
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <h6>Pick-Up Date & Time</h6>
                                    <p>
                                        {pickTime} /{" "}
                                        <input
                                            type="time"
                                            className="input-time"
                                        ></input>
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__car-info__dates">
                            <span>
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <h6>Drop-Off Date & Time</h6>
                                    <p>
                                        {dropTime} /{" "}
                                        <input
                                            type="time"
                                            className="input-time"
                                        ></input>
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__car-info__dates">
                            <span>
                                <i className="fa-solid fa-calendar-days"></i>
                                <div>
                                    <h6>Pick-Up Location</h6>
                                    <p>{pickUp} </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__car-info__dates">
                            <span>
                                <i className="fa-solid fa-calendar-days"></i>
                                <div>
                                    <h6>Drop-Off Location</h6>
                                    <p>{dropOff} </p>
                                </div>
                            </span>
                        </div>
                    </div>
                    {/* car image */}
                    <div className="booking-modal__car-info__model">
                        <h5>
                            <span>Car -</span> {carType}
                        </h5>
                        {imgUrl && <img src={imgUrl} alt="car_img" />}
                    </div>
                </div>

                {/* personal info */}
                <div className="booking-modal__person-info">
                    <h4>Personal Information</h4>
                    <form className="info-form">
                        <div className="info-form__2col">
                            <span>
                                <label>
                                    First Name <b>*</b>
                                </label>
                                <input
                                    value={name}
                                    onChange={handleName}
                                    type="text"
                                    placeholder="Enter your first name"
                                ></input>
                                <p className="error-modal">
                                    This field is required.
                                </p>
                            </span>

                            <span>
                                <label>
                                    Last Name <b>*</b>
                                </label>
                                <input
                                    value={lastName}
                                    onChange={handleLastName}
                                    type="text"
                                    placeholder="Enter your last name"
                                ></input>
                                <p className="error-modal ">
                                    This field is required.
                                </p>
                            </span>

                            <span>
                                <label>
                                    Phone Number <b>*</b>
                                </label>
                                <input
                                    value={phone}
                                    onChange={handlePhone}
                                    type="tel"
                                    placeholder="Enter your phone number"
                                ></input>
                                <p className="error-modal">
                                    This field is required.
                                </p>
                            </span>

                            <span>
                                <label>
                                    Age <b>*</b>
                                </label>
                                <input
                                    value={age}
                                    onChange={handleAge}
                                    type="number"
                                    placeholder="18"
                                ></input>
                                <p className="error-modal ">
                                    This field is required.
                                </p>
                            </span>
                        </div>

                        <div className="info-form__1col">
                            <span>
                                <label>
                                    Email <b>*</b>
                                </label>
                                <input
                                    value={email}
                                    onChange={handleEmail}
                                    type="email"
                                    placeholder="Enter your email address"
                                ></input>
                                <p className="error-modal">
                                    This field is required.
                                </p>
                            </span>

                            <span>
                                <label>
                                    Address <b>*</b>
                                </label>
                                <input
                                    value={address}
                                    onChange={handleAddress}
                                    type="text"
                                    placeholder="Enter your street address"
                                ></input>
                                <p className="error-modal ">
                                    This field is required.
                                </p>
                            </span>
                        </div>

                        <div className="info-form__2col">
                            <span>
                                <label>
                                    City <b>*</b>
                                </label>
                                <input
                                    value={city}
                                    onChange={handleCity}
                                    type="text"
                                    placeholder="Enter your city"
                                ></input>
                                <p className="error-modal">
                                    This field is required.
                                </p>
                            </span>

                            <span>
                                <label>
                                    Zip Code <b>*</b>
                                </label>
                                <input
                                    value={zipcode}
                                    onChange={handleZip}
                                    type="text"
                                    placeholder="Enter your zip code"
                                ></input>
                                <p className="error-modal ">
                                    This field is required.
                                </p>
                            </span>
                        </div>

                        <span className="info-form__checkbox">
                            <input type="checkbox"></input>
                            <p>Please send me latest news and updates</p>
                        </span>

                        <div className="reserve-button">
                            <button onClick={confirmBooking}>
                                Reserve Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookCar;
