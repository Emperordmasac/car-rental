import React, { useState } from "react";

const Faq = () => {
    const [activeQ, setActiveQ] = useState("q1");

    const openQ = (q) => {
        setActiveQ(activeQ === q ? "" : q);
    };

    const getClassAnswer = (q) => {
        return activeQ === q ? "active-answer" : "";
    };

    const getClassQuestion = (q) => {
        return activeQ === q ? "active-question" : "";
    };

    return (
        <>
            <section className="faq-container">
                <div className="container">
                    <div className="faq-content">
                        <div className="faq-content__title">
                            <h5>FAQ</h5>
                            <h2>Frequently Asked Questions</h2>
                            <p>
                                Frequently Asked Questions About the Kings Ride
                                Booking Process on Our Website: Answers to
                                Common Concerns and Inquiries.
                            </p>
                        </div>

                        <div className="all-questions">
                            <div className="faq-box">
                                <div
                                    id="q1"
                                    onClick={() => openQ("q1")}
                                    className={`faq-box__question ${getClassQuestion(
                                        "q1"
                                    )}`}
                                >
                                    <p>
                                        1. What is special about comparing
                                        rental car deals?
                                    </p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div
                                    id="q1"
                                    className={`faq-box__answer ${getClassAnswer(
                                        "q1"
                                    )}`}
                                    onClick={() => getClassAnswer("q1")}
                                >
                                    Comparing rental car deals is important as
                                    it helps find the best deal that fits your
                                    budget and requirements, ensuring you get
                                    the most value for your money. By comparing
                                    various options, you can find deals that
                                    offer lower prices, additional services, or
                                    better car models. You can find Kings Ride
                                    deals by researching online and comparing
                                    prices from different rental companies.
                                </div>
                            </div>

                            <div className="faq-box">
                                <div
                                    id="q2"
                                    onClick={() => openQ("q2")}
                                    className={`faq-box__question ${getClassQuestion(
                                        "q2"
                                    )}`}
                                >
                                    <p>
                                        2. How old do I need to be to rent a
                                        car?
                                    </p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div
                                    id="q2"
                                    className={`faq-box__answer ${getClassAnswer(
                                        "q2"
                                    )}`}
                                    onClick={() => getClassAnswer("q2")}
                                >
                                    As With many rental companies, you must be
                                    at least 21 years of age to rent a car, and
                                    any driver under 25 may have to pay a Young
                                    Driver Fee. Similarly, people aged 70+ may
                                    find some companies will charge a Senior
                                    Driver Fee, or may not rent to them at all.
                                    So car rental for the under-25s or over-70s
                                    can be more expensive – which is one more
                                    reason to book with KingsRide.com, as we
                                    work with all the big brands. Just check
                                    each car’s terms and conditions to see if
                                    your age would make any difference.
                                </div>
                            </div>

                            <div className="faq-box">
                                <div
                                    id="q3"
                                    onClick={() => openQ("q3")}
                                    className={`faq-box__question ${getClassQuestion(
                                        "q3"
                                    )}`}
                                >
                                    <p>3. Can I book a one-way car rental?</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div
                                    id="q3"
                                    className={`faq-box__answer ${getClassAnswer(
                                        "q3"
                                    )}`}
                                    onClick={() => getClassAnswer("q3")}
                                >
                                    Yes. One-way car rental deals are quite
                                    common, as they give people even more
                                    freedom to explore and enjoy their rental.
                                    However, rental companies will often charge
                                    a One Way Fee (or ‘drop charge’) to cover
                                    the cost of returning the car to its
                                    original location. As the world’s biggest
                                    online car rental service, we can help you
                                    find a one-way rental car with a low Fee –
                                    or no Fee at all.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;
