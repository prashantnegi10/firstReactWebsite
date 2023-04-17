import React from "react";
import about1 from "../src/img/home.svg";
import Common from "./Common";
const About = () => {
    return (
        <>
            <Common name="Welcome to About Page" imgscr={about1} visit="/contact" btnname="Contact Now" />
        </>
    )
}

export default About;