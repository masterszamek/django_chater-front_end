import React, {useCallback, useEffect, useState} from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';






const SignIn = (props)=>{
    const [data, setData] = useState({});

    const handleSubmit = (e)=> {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target)};

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let width = 30;
    const breakpoints = [
        [1200, 20],
        [992, 35],
        [762, 40],
        [576, 60],
        [0, 90],
    ]
    for(let i=0; i<breakpoints.length; i++){
        console.log(breakpoints[i])
        if(vw > breakpoints[i][0]){
            width = breakpoints[i][1];
            break
        }
    }
    return (
        <div style={{"width": `${width}%`}} className="www">
            <h3> Sign In </h3>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" onChange={(e)=>{console.log(e.target.value) }}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>{console.log(e) }} />
                </Form.Group>

                <Form.Group>
                    <Button type="submit">Sign in</Button>
                </Form.Group>
            </Form>

      
        </div>
    )

}

export {SignIn as default}