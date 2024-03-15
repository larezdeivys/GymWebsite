import React from "react";
import img1 from "../../assets/img/pricing1.png";
import img2 from "../../assets/img/pricing2.png";
import img3 from "../../assets/img/pricing3.png";
import TitleSection from "./TitleSection";
import Calculate from './Calculate';
import Footer from './Footer';

const items = [
    {
        img: img1,
        title: 'BASIC PACKAGE',
        price: '$120',
    },
    {
        img: img2,
        title: 'PREMIUM PACKAGE',
        price: '$240',
    },
    {
        img: img3,
        title: 'DIAMOND PACKAGE',
        price: '$420',
    },
]

const items_li =[ 
    '5 Days In A Week',
    '01 Sweatshirt',
    '01 Bottle of Protein',
    'Access to Videos',
    'Muscle Stretching'
]

const Pricing = () => {
    return (
        <div id="pricing" className=" w-full">
        <section className="container max-w-90 mx-auto pt-12 text-center">
            <h3 className="text-2xl mb-4"></h3>
            <h2 className="text-5xl font-bold mb-28 text-title-color"><span className="border-text"></span> </h2>
            <TitleSection text1={'Pricing'} textBorder={'OUR'} text2={'SPECIAL PLAN'} />

            <div className="flex flex-wrap justify-center gap-12">
                {items.map((item,i) => (
                    <div className="bg-title-color-black w-80 p-12 text-left hover:bg-first-color duration-300 group">
                        <img src={item.img} className="w-12 h-12 bg-first-color-gray rounded-full p-2 mb-4" alt="" />
                        <h2 className="mb-4 font-bold text-xl text-first-color-gray group-hover:text-title-color-black duration-300">{item.title}</h2>
                        <div className="text-4xl mb-8 font-bold text-title-color group-hover:text-title-color-black duration-300">{item.price}</div>
                        <ul className="mb-8">
                            {items_li.map((item_li, i_li) => (
                                <li className={`mb-2 text-lg ${i < 2 && i_li <= i+1 || i === 2 ? " " : "opacity-50"} group-hover:text-title-color-black duration-300`}>{item_li} {i}</li>
                            ))}
                        </ul>
                            <div
                                className="w-full relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out hover:pl-10 hover:pr-6 bg-gray-50 group/button"
                            >     
                                <span
                                    className="absolute bottom-0 left-0 w-full h-0 transition-all duration-150 ease-in-out bg-body-color group-hover/button:h-full"
                                ></span>
                                <span
                                    className="absolute right-0 pr-4 duration-200 ease-out group-hover/button:translate-x-12"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        fill="none"
                                        class="w-5 h-5 text-green-400"
                                    >
                                        <path
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>
                                </span>
                                <span
                                    className="absolute left-0 pl-2.5 -translate-x-12 group-hover/button:translate-x-0 ease-out duration-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        fill="none"
                                        class="w-5 h-5 text-green-400"
                                    >
                                        <path
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            stroke-width="2"
                                            stroke-linejoin="round"
                                            stroke-linecap="round"
                                        ></path>
                                    </svg>
                                </span>
                                <span
                                    className="relative w-full text-xl text-left transition-colors duration-200 ease-in-out group-hover/button:text-white"
                                    >Button</span>
                            </div>
                        </div>
                ))}
            </div>
        </section>
        <Calculate />
        <Footer />
        </div>
    )
};

export default Pricing;