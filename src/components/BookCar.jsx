import React, { useState } from "react";

const BookCar = () => {
    //--active modal state
    const [modal, setModal] = useState(false);

    //--booking car state
    const [carType, setCarType] = useState("");
    const [pickup, setPickup] = useState("");
    const [dropOff, setDropOff] = useState("");
    const [pickTime, setPickTime] = useState("");
    const [dropTime, setDropTime] = useState("");
    const [carImg, setCarImg] = useState("");

    //--function to open modal when all inputs are complete
    const openModal = (e) => {
        e.preventDefault();
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

    return (
        <>
            <section id="booking-section" className="book-section">
                {/* modal overlay */}
                <div
                    onClick={openModal}
                    className={`modal-ovelay ${modal ? "active-modal" : ""}`}
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
                                        value={pickup}
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
                                <div className="box-form__car-type">
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
                                <div className="box-form__car-type">
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
        </>
    );
};

export default BookCar;
