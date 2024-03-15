import React from "react";
import img from "../../assets/img/choose-img.png";
import TitleSection from './TitleSection';

const items = [
    {
        span: '200+',
        p:'Total Members'
    },
    {
        span: '50+',
        p:'Best trainers'
    },
    {
        span: '25+',
        p:'Programs'
    },
    {
        span: '100+',
        p:'Awards'
    },
]

const ChooseUs = () => {
    return(
        <section id="choose" className="relative overflow-hidden">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:relative">
                <div className="">
                    <img src={img} alt="" className="mx-auto w-80 md:w-4/5" />
                    
                    <div className={`h-1/2 w-full md:h-130 absolute left-0 bottom-0 -z-10 bg-first-color md:w-1/2 choose-triangle`}></div>
                    <div className={`h-1/2 w-2/3 md:h-130 absolute left-0 bottom-0 -z-10 bg-first-color-alt md:w-1/3 choose-triangle`}></div>
                    <div className={`h-1/2 w-1/3 md:h-130 absolute left-0 bottom-0 -z-10 bg-first-color-dark md:w-1/6 choose-triangle`}></div>
                </div>
                <div className="text-center md:text-left text-lg">
                    
                    <TitleSection text1={'Best Reason'} textBorder={'WHY'} text2={'CHOOSE US?'} />
                    
                    <p>Choose your favorite class and start now. Remember the only bad workout is the one you didn't do.</p>
                    <div className="grid grid-cols-2 place-items-center gap-y-8 mt-16">
                        {items.map(item =>(
                            <div>
                                <div className="text-center w-fit">
                                    <span className="text-3xl lg:text-4xl text-title-color">{item.span}</span>
                                    <p>{item.p}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ChooseUs;