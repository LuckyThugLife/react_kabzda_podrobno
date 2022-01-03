import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {Accordion} from "./components/Accordion/Accordion";


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)


    return (
        <div className={"App"}>
            <OnOff/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed}/>
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
