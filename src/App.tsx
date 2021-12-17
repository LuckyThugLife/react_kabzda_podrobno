import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";
import {PageTitle} from "./PageTitle";


function App() {
    return (
        <div>
            <input/>
            <input value={"Yo"} type={"password"}/>
            <PageTitle title={"This is App component"}/>
            <PageTitle title={"My Friends"}/>
            <Rating value={0}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}



export default App;
