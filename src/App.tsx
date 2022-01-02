import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {PageTitle} from "./PageTitle";
import OnOff from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnConrolledAccordion/UnControlledAccordion";
import { UnControlledRating } from './components/UnControlledRating/UnControlledRating';


function App() {
    return (
        <div className={"App"}>
            <OnOff/>

            <UnControlledAccordion titleValue={"Menu"} />

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
