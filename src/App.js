import { Route, Routes } from "react-router-dom";

import "static/dist/styles.css";
import { Navbar } from "components";
import { Home } from "pages";

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route index path="/" element={<Home />} />
            </Routes>
        </>
    );
};

export default App;
