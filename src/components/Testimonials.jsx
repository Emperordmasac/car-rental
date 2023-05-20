import Img2 from "static/images/testimonials/pfp1.jpg";
import Img3 from "static/images/testimonials/pfp2.jpg";

const Testimonials = () => {
    return (
        <>
            <section className="testimonials-section">
                <div className="container">
                    <div className="testimonials-content">
                        <div className="testimonials-content__title">
                            <h4>Reviewed by People</h4>
                            <h2>Client's Testimonials</h2>
                            <p>
                                Discover the positive impact we've made on the
                                our clients by reading through their
                                testimonials. Our clients have experienced our
                                service and results, and they're eager to share
                                their positive experiences with you.
                            </p>
                        </div>

                        <div className="all-testimonials">
                            <div className="all-testimonials__box">
                                <span className="quotes-icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </span>
                                <p>
                                    "We rented a car from this website and had
                                    an amazing experience! The booking was easy
                                    and the rental rates were very affordable. "
                                </p>
                                <div className="all-testimonials__box__name">
                                    <div className="all-testimonials__box__name__profile">
                                        <img src={Img2} alt="user-img" />
                                        <span>
                                            <h4>Micheal Odoba</h4>
                                            <p>Business Owner</p>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="all-testimonials__box box-2">
                                <span className="quotes-icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </span>
                                <p>
                                    "The car was in great condition and made our
                                    trip even better. Highly recommend for this
                                    car rental website!"
                                </p>
                                <div className="all-testimonials__box__name">
                                    <div className="all-testimonials__box__name__profile">
                                        <img src={Img3} alt="user-img" />
                                        <span>
                                            <h4>Ron Rizzly</h4>
                                            <p>CEO</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
