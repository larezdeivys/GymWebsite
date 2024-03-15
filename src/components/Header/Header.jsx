import React from "react";
import img from "../../assets/img/home-img.png";
import Logos from "./ContentLogos";

const Header = () => {
    return (
        <div id="head">
            <header className="relative text-center md:h-screen min-h-screen  md:text-left flex items-center">
                <div className="container max-w-90 flex flex-col md:flex-row mx-auto justify-between items-center h-full min-h-full pt-16 md:py-16 gap-y-8">
                    <div>
                        <h2 className="border-text font-bold text-3xl mb-8 uppercase lg:text-6xl">make your</h2>
                        <h1 className="text-4xl font-extrabold mb-8 uppercase text-title-color lg:text-8xl">body shape</h1>
                        <p className="text-lg mb-8 max-w-96 w-full">In here we will help you to shape and build your ideal body and live your life to the fullest.</p>

                        <button class="cursor-pointer relative group overflow-hidden border-2 w-36 h-12 border-first-color z-20">
                            <span class="font-semibold text-body-color text-xl relative z-10 group-hover:text-first-color duration-500">Get Started</span>
                            <span class="absolute top-0 left-0 w-full bg-first-color duration-500 group-hover:-translate-x-full h-full"></span>
                            <span class="absolute top-0 left-0 w-full bg-first-color duration-500 group-hover:translate-x-full h-full"></span>

                            <span class="absolute top-0 left-0 w-full bg-first-color duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span class="absolute delay-300 top-0 left-0 w-full bg-first-color duration-500 group-hover:translate-y-full h-full"></span>
                        </button>

                    </div>
                    <div>
                        <img src={img} className="w-4/5 mx-auto mt-8 md:absolute md:w-45 md:bottom-0 md:right-8 md:mt-0" />

                        <div className={`absolute h-1/2 w-full right-0 bottom-0 -z-10 bg-first-color md:w-1/2 home-triangle md:h-120vh`}></div>
                        <div className={`absolute h-1/2 w-2/3 right-0 bottom-0 -z-10 bg-first-color-alt md:w-1/3 home-triangle md:h-120vh`}></div>
                        <div className={`absolute h-1/2 w-1/3 right-0 bottom-0 -z-10 bg-first-color-dark md:w-1/6 home-triangle md:h-120vh`}></div>

                    </div>
                </div>
            </header>
            <Logos />
            
        </div>
    )
};

export default Header;