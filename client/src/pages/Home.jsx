import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Campaign from "../components/Campaign";
// import Footer from "./Footer";

function Home() {
    return ( 
        <>
            <Hero/>
            <About/>
            <Campaign/>
            {/* <Footer/> */}
        </>
     );
}

export default Home;