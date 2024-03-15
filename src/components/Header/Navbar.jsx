import React from "react";
import {Link} from "react-scroll"
import logo from '../../assets/img/logo-nav.png'

const nav__links = [
    {
        path:'head',
        display:'Home',
    },
    {
        path:'program',
        display:'Program',
    },
    {
        path:'choose',
        display:'Choose Us',
    },
    {
        path:'pricing',
        display:'Pricing',
    }
]

// console.log(window)

// window.addEventListener('scroll', () => {
//     console.log(document.querySelector('#navbar'))
// })

const addMenu = () => {
    document.querySelector('#navbar').classList.remove('translate-x-full')
}

const removeMenu = () => {
    document.querySelector('#navbar').classList.add('translate-x-full')
}

const Navbar = () => {

    return (
        <nav className="fixed top-0 left-0 w-full bg-title-color-black shadow-md shadow-body-color z-50">
                <div className="flex items-center h-16 container max-w-90 mx-auto text-title-color lg:h-20">
                    <div className="flex grow">
                        <div className="w-6 mr-2"><img src={logo} alt="" /></div>
                        <h2 className="font-bold text-lg">BEROTOT</h2>
                    </div>

                    <div id="navbar" className="
                        absolute h-screen right-0 top-0 z-50 duration-300 bg-blur backdrop-blur border-l border-white text-lg translate-x-full
                        lg:relative lg:h-12 lg:flex lg:bg-transparent lg:aitems-center lg:translate-x-0 lg:border-none"
                    >
                        <ul className="flex flex-col mt-16 lg:mt-0 lg:flex-row lg:items-center">
                            {
                                nav__links.map(item => (
                                    <li className="mx-8 mb-4 duration-500 hover:text-first-color lg:mb-0 cursor-pointer">
                                        <Link
                                            activeClass="active"
                                            to={item.path} 
                                            spy={true} 
                                            smooth={true} 
                                            offset={-80} 
                                            duration={500}
                                        >
                                            {item.display}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                        {/* <button className="w-36 h-12 bg-title-color text-body-color font-bold mx-8 lg:mr-0">Register Now</button> */}
                        <button
                            class="overflow-hidden relative w-40 p-2 h-12 mx-8 bg-title-color text-body-color border-none font-bold cursor-pointer z-10 group"
                        >
                            Register Now
                            <span
                                class="absolute w-36 h-36 -top-8 -left-2 bg-lime-100 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"
                            ></span>
                            <span
                                class="absolute w-36 h-36 -top-8 -left-2 bg-lime-300 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"
                            ></span>
                            <span
                                class="absolute w-36 h-36 -top-8 -left-2 bg-first-color rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-left"
                            ></span>
                            <span
                                class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
                                >Register Now</span>
                        </button>
                        <button onClick={removeMenu} className="absolute right-8 top-6 z-50 lg:hidden">X</button>
                    </div>

                    <div>
                        <button onClick={addMenu} className="z-10 relative lg:hidden">menu</button>
                    </div>
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Navbar;