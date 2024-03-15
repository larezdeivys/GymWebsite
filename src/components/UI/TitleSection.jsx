import React from "react";

export default function TitleSection(props) {

    return (
        <>
            <h3 className="text-xl lg:text-3xl mb-4 font-['Kaushan_Script',cursive]">{props.text1}</h3>
            <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-title-color"><span className="border-text">{props.textBorder}</span> {props.text2}</h2>
        </>
    )
};