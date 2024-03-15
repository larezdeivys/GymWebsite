import React from "react";
import img from "../../assets/img/logo-nav.png";

const items = [
    {
        h3: 'SERVICES',
        li: [
            'Flex Muscle',
            'Cardio Exercise',
            'Basic Yoga',
            'Weight Lifting'
        ]
    },
    {
        h3: 'PRICING',
        li: [
            'Basic',
            'Premium',
            'Diamond'
        ]
    },
    {
        h3: 'COMPANY',
        li: [
            'About Us',
            'Careers',
            'Customers',
            'Partners'
        ]
    }
]

const Footer = () => { 
    return (
        <footer className="container max-w-90 mx-auto pt-12 pb-44 flex flex-col justify-center lg:flex-row md:justify-between item-center text-lg">
            <div className="mb-12 lg:mb-0">
                <div className="flex grow mb-4 text-title-color">
                    <div className="w-5 mr-2"><img src={img} alt="" /></div>
                    <h2 className="font-bold">FitBody</h2>
                </div>
                <p className="mb-4 text-title-color">Subscribe for company<br />
                updates below.
                </p>
                <input type="text" placeholder="Your Email" className="h-12 w-60 bg-transparent px-4 border-2 border-first-color sms:block sms:w-full sms:ml-0 mb-8" />
                {/* <button className="h-12 w-32 bg-first-color text-title-color-black ml-8 sms:block sms:w-full sms:ml-0">Subscribe</button> */}

                <button class="cursor-pointer relative group overflow-hidden border-2 w-36 h-12 border-first-color ml-8 sms:block sms:w-full sms:ml-0">
                    <span class="font-semibold text-body-color text-xl relative z-10 group-hover:text-first-color duration-500">Subscribe</span>
                    <span class="absolute top-0 left-0 w-full bg-first-color duration-500 group-hover:-translate-x-full h-full"></span>
                    <span class="absolute top-0 left-0 w-full bg-first-color duration-500 group-hover:translate-x-full h-full"></span>

                    <span class="absolute top-0 left-0 w-full bg-first-color duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                    <span class="absolute delay-300 top-0 left-0 w-full bg-first-color duration-500 group-hover:translate-y-full h-full"></span>
                </button>
            </div>

            <div className="flex gap-20 sms:flex-wrap">
                {items.map(item => (
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-title-color">{item.h3}</h3>
                        <ul>
                            {item.li.map(li => (
                                <li className="mb-2">{li}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    )
};

export default Footer;