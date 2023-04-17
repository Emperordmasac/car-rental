import { Footer, HeroPages } from "components";

import Person1 from "static/images/team/1.png";
import Person2 from "static/images/team/2.png";
import Person3 from "static/images/team/3.png";
import Person4 from "static/images/team/4.png";
import Person5 from "static/images/team/5.png";
import Person6 from "static/images/team/6.png";

const Team = () => {
    const teams = [
        { img: Person1, name: "Luke Miller", job: "Salesman" },
        { img: Person2, name: "Michael Diaz", job: "Business Owner" },
        { img: Person3, name: "Briana Ross", job: "Photographer" },
        { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
        { img: Person5, name: "Martin Rizz", job: "Mechanic" },
        { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
    ];
    return (
        <>
            <section className="team-page">
                <HeroPages name="Our Team" />
                <div className="container">
                    <div className="team-container">
                        {teams.map((team, i) => (
                            <div key={i + 1} className="team-container__box">
                                <div className="team-container__box__img-div">
                                    <img src={team.img} alt="team-img" />
                                </div>
                                <div className="team-container__box__descr">
                                    <h3>{team.name}</h3>
                                    <p>{team.job}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* banner */}
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
                <Footer />
            </section>
        </>
    );
};

export default Team;
