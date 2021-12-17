import React from "react";


type AccordionPropsType ={
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

//conditional rendering
        return <div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapsed && <AccordionBody/>}
        </div>

}

type AccordionTitlePropsType ={
    title: string
}

function AccordionTitle(props:AccordionTitlePropsType) {
    debugger
    console.log("AccordionTitle rendering")

    return <div>
        <h3>-- {props.title} --</h3>
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