import Img1 from "static/images/download/appstore.svg";
import Img2 from "static/images/download/googleapp.svg";

const Download = () => {
    return (
        <>
            <section className="download-section">
                <div className="container">
                    <div className="download-text">
                        <h2>Download our app to get most out of it</h2>
                        <p>
                            Kings Ride is a transport company which is a limited
                            company registered in Africa and Europe whose
                            registered address is at 100 New Bridge Street,
                            London. Kings Ride is part of Booking Holdings Inc.,
                            The world leader in online travel & related
                            services.
                        </p>
                        <div className="download-text__btns">
                            <img src={Img2} alt="download_img" />
                            <img src={Img1} alt="download_img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Download;
