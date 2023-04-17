import { Route, Routes } from "react-router-dom";

import "static/dist/styles.css";
import { Navbar } from "components";
import { Home, About } from "pages";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
