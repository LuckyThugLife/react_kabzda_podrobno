import React from 'react';

import './App.css';
import {RatingValueType} from "./components/Rating/Rating";



type StarPropsType ={
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}
function Star(props:StarPropsType) {
    console.log("Star rendering")

    return <span onClick={() => {props.onClick(props.value)}}>
        {props.selected ? <b>star </b> : "star "}
    </span>
}


export default Star;
