import { Route, Routes } from "react-router-dom";

import "static/dist/styles.css";
import { Navbar } from "components";
import { Home, About, Models } from "pages";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="models" element={<Models />} />
            </Routes>
        </>
    );
};

export default App;
