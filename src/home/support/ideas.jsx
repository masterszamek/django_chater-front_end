import React from "react";
import {Container, Row, Col} from 'react-bootstrap';

import "css/home/ideas.css";

const Idea = (props)=>{
    return(
        <div className="idea d-flex flex-column  mb-3">
            <h5>{props.title} </h5>
            <p>{props.text}</p>
            <h6 className="mb-2 mr-2 ml-auto "> adsadadada </h6>
        </div>
    )
}

const PriorityContainer = (props) =>{
    let sample_data = [];
    for(let i=0; i<20; i++){
        sample_data.push(<Idea key={`qwrwer${i}`} title={`tytul_${i}`} text={`jakis sobie tekst__${i}`}/>)
    }
 
    return (
        <div className="priority_container flex-fill  d-flex flex-column">
            <h4 >{props.title}</h4>
            <div className="flex-grow-1 overflow-auto">
                {sample_data}
            </div>

            <button type="button" className="btn btn-secondary">Primary</button>
        </div>
    )
}

const Ideas = (props)=>{

    return (
        <Container fluid className="d-flex flex-row p-0 h-100">
                <PriorityContainer title="Hight task priority"/>
                <PriorityContainer title="Hight task priority"/>
                <PriorityContainer title="Hight task priority"/>
                <PriorityContainer title="Hight task priority"/>
        </Container>      


    )


}


export {Ideas as default};
