import React, { useState } from "react";
import img from "../../assets/img/calculate-img.png";


export default function Calculate() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState('');
    const [res, setRes] = useState('');
    const [resColor, setResColor] = useState('text-red-700');
    
    const onChangeAltura = function (e) {
        setAltura(e.target.value / 100)
    }
    
    const onChangePeso = function (e) {
        setPeso(e.target.value)
    }

    const calcular = () => {
        document.querySelector('.span').classList.remove('hidden')
        setImc((peso / (altura * altura)).toFixed(2))
    }

    const cal = function () {
        if ( imc < 20 ) {
            return 'thin 😥'
        }
        else if ( imc >= 20 && imc < 26 ) {
            return 'healthy 😎😎😎'
        }
        else if ( imc >= 26 && imc < 30 ) {
            return 'fat 🤔'
        }
        else if (imc > 30) {
            return 'obese 😞'
        }
    }

    return (
        <section className="container max-w-90 mx-auto pt-44 pb-40 text-center text-lg">

            <div className="flex items-center justify-between gap-12 flex-col md:flex-row">
                
                <div className="relative text-center md:text-left max-w-400">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-title-color"><span className="border-text">CALCULATE</span> YOUR BMI</h2>
                    
                    <p className="mb-8">The body mass index (BMI) calculator calculates body mass index from your weight and height.</p>
                    
                    <div className="flex flex-wrap md:flex-nowrap gap-8">

                        <div className="w-full flex border border-first-color">
                            <input onChange={onChangeAltura} type="text" placeholder="Height" className="w-full h-12 bg-transparent px-4" name="height" id="height" />
                            <label htmlFor="height" className="h-12 px-4 flex justify-center items-center text-title-color">cm</label>
                        </div>

                        <div className="w-full flex border border-first-color">
                            <input onChange={onChangePeso} type="text" placeholder="Weight" className="w-full h-12 bg-transparent px-4" name="weight" id="weight" />
                            <label htmlFor="weight" className="h-12 px-4 flex justify-center items-center text-title-color">kg</label>
                        </div>
                    </div>

                    {/* <button onClick={calcular} className="w-full h-12 bg-first-color text-body-color mt-8 font-semibold">Calculate Now</button> */}
                        
                        <div onClick={calcular} className="w-full h-12 mt-8 flex items-center justify-center cursor-pointer shadow bg-first-color group/button">
                            <div
                                className="w-46 relative inline-flex items-center justify-start py-3 pl-4 pr-12 font-semibold text-body-color transition-all duration-150 ease-in-out group-hover/button:pl-10 group-hover/button:pr-6"
                            >     
                                <span
                                    className="absolute right-0 pr-4 duration-200 ease-out opacity-100 group-hover/button:opacity-0 group-hover/button:translate-x-12"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        fill="none"
                                        class="w-5 h-5 text-body-color"
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
                                    className="absolute left-0 pl-2.5 -translate-x-12 opacity-0 group-hover/button:opacity-100 group-hover/button:translate-x-0 ease-out duration-200"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        fill="none"
                                        class="w-5 h-5 text-body-color"
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
                                    className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover/button:text-body-color font-semibold"
                                    >Calculate Now</span>
                            </div>
                        </div>

                    <p className={`span absolute left-0 -bottom-8  hidden ${peso !== '' || altura !== '' ? 'text-first-color' : 'text-red-700'}`}>
                        {
                            peso !== '' || altura !== '' ? `Your BMI is ${imc} and your are ${cal()}` : 'Fill in the Height and Weight'
                        }
                    </p>
                </div>

                <div className="md:w-1/2 xl:w-2/5">
                    <img src={img} alt="" className="w-1/2 max-w-80 mx-auto" />
                </div>
            </div>
        </section>
    )
};