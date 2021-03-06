import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Accordion} from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)


    return (
        <div className={"App"}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>

            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>


            {/*<UnControlledAccordion titleValue={"Menu"} />*/}

            <UnControlledRating />



        {/*    <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}



        </div>
    );
}



export default App;
