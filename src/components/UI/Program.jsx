import React from "react";
import Program1 from "../../assets/img/program1.png";
import Program2 from "../../assets/img/program2.png";
import Program3 from "../../assets/img/program3.png";
import Program4 from "../../assets/img/program4.png";
import TitleSection from "./TitleSection";

const items = [
    {
        img: Program1,
        h2: "Flex Muscle",
        p: "Creating tension that's temporarily making the muscle fibers smaller or contracted."
    },
    {
        img: Program2,
        h2: "Cardio Exercise",
        p: "Exercise your heart rate up and keeps it up for a prolonged period of time."
    },
    {
        img: Program3,
        h2: "Basic Yoga",
        p: "Diaphragmatic this is the most common breathing technique you'll find in yoga."
    },
    {
        img: Program4,
        h2: "Weight Lifting",
        p: "Attempts a maximum weight single lift of a barbell loaded with weight plates."
    },
]

const Program = () => {
    return (
        <section id="program" className="container max-w-90 mx-auto pt-16 pb-32 text-center">

            <TitleSection text1={'Our Program'} textBorder={'BUILD YOUR'} text2={'BEST BODY'} />
            
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-12">
                {
                    items.map(item => (
                        <div className="bg-title-color-black p-12 pb-20 text-left hover:bg-first-color duration-300 group">
                            <img src={item.img} className="w-12 h-12 bg-first-color-gray rounded-full p-2 mb-4" alt="" />
                            <h2 className="mb-4 font-bold text-xl text-title-color group-hover:text-title-color-black duration-300">{item.h2}</h2>
                            <p className="group-hover:text-title-color-black duration-300 text-lg">{item.p}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default Program;