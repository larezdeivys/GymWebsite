import React from "react";
import logo1 from "../../assets/img/logo1.png";
import logo2 from "../../assets/img/logo2.png";
import logo3 from "../../assets/img/logo3.png";
import logo4 from "../../assets/img/logo4.png";

const ContentLogos = () => {
    return (
        <div className="hidden container max-w-90 mx-auto h-40 md:flex justify-between items-center">
            <a href="#"><img src={logo1} className="w-32 lg:w-60" /></a>
            <a href="#"><img src={logo2} className="w-32 lg:w-60" /></a>
            <a href="#"><img src={logo3} className="w-32 lg:w-60" /></a>
            <a href="#"><img src={logo4} className="w-32 lg:w-60" /></a>
        </div>
    )
};

export default ContentLogos;