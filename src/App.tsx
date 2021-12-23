import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {PageTitle} from "./PageTitle";
import OnOff from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/UnConrolledAccordion/UnControlledAccordion";


function App() {
    return (
        <div>
            {/*<input/>
            <input value={"Yo"} type={"password"}/>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>
            <Rating value={0}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UnControlledAccordion titleValue={"Menu"} />
            <UnControlledAccordion titleValue={"Users"} />
        {/*    <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

            <OnOff/>
            <OnOff/>
            <OnOff/>
        </div>
    );
}



export default App;
