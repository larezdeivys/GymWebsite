import React from "react";
import '../../App.css';

export default function Triangle(props) {

    return (

        <div className={`absolute h-1/2 right-0 bottom-0 -z-10 bg-${props.color} w-${props.width} home-triangle md:h-120vh`}></div>

    )
};;