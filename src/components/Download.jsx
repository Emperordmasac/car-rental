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
                            Thrown shy denote ten ladies though ask saw. Or by
                            to he going think order event music. Incommode so
                            intention defective at convinced. Led income months
                            itself and houses you.
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
