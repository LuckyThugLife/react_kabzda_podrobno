import React, {useState} from "react";
import App from "../../App";


type UnControlledAccordionPropsType ={
    titleValue: string
    /*collapsed: boolean*/
}

export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    console.log("UnControlledAccordion rendering")

    let [collapsed, setCollapsed] = useState(false)

//conditional rendering
        return <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)} }/>
            { !collapsed && <AccordionBody/>}
        </div>

}

type AccordionTitlePropsType ={
    title: string
    onClick: () => void
}

function AccordionTitle(props:AccordionTitlePropsType) {
    debugger
    console.log("AccordionTitle rendering")

    return <div>
        <h3 onClick={() => {props.onClick()}}>-- {props.title} --</h3>
    </div>

}

function AccordionBody(props:any) {
    console.log("AccordionBody rendering")
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>

}

export default App;
