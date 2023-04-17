import React from "react";
import home1 from "../src/img/home.svg";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow your business with" imgscr={home1} visit="/service" btnname="Get Started" />
        </>
    )
}

export default Home;