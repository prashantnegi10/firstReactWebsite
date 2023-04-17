import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import "./index.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (<>
        <Navbar />
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/service" Component={Service} />
            <Route path="/contact" Component={Contact} />
            <Route path="*" Component={Home} />
        </Routes>
    </>);
};

export default App;