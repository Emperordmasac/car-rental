import { Route, Routes } from "react-router-dom";

import "static/dist/styles.css";
import { Navbar } from "components";
import { Home, About, Models, TestimonialsPage, Team } from "pages";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="models" element={<Models />} />
                <Route path="testimonials" element={<TestimonialsPage />} />
                <Route path="team" element={<Team />} />
            </Routes>
        </>
    );
};

export default App;
