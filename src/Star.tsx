import React from 'react';

import './App.css';



type StarPropsType ={
    selected: boolean
}
function Star(props:StarPropsType) {
    console.log("Star rendering")

    if (props.selected === true) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }
}


export default Star;
