import React, { useRef, useState} from 'react';
import {Form, Row, Col, Button, Spinner} from 'react-bootstrap';


import URLS from "home/routing_urls";
import getWidthForm from '_helpers/get_width_form';
import {itsFieldError, getFieldError} from '_helpers/form_helpers';
import FormError from "_components/form_error";

import AUTHENTICATION from "_services/auth_service";
import { Redirect } from 'react-router';





const SignInForm = (props)=>{
    console.log(props);
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [is_pending, setIsPending] = useState(false);
    const [error, setError] = useState();



    const handleSubmit = async e => {
        
        e.preventDefault();
        e.stopPropagation();
       
        const form = e.currentTarget;
        if(!form.checkValidity) return;


        setIsPending(true);
        const [response, data] = await AUTHENTICATION.login(login, password)
        setIsPending(false);

        console.log(data);
        if(!response.ok)setError(data);
        else {
            props.setRedirect(true);
        }
    };

    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="form_login">
                <Form.Label>Login</Form.Label>
                <Form.Control  required isInvalid={itsFieldError("username", error)} placeholder="Login" onChange={e=>{setLogin(e.target.value)}}/>
                <Form.Control.Feedback type="invalid">
                    {getFieldError("username", error)}
                </Form.Control.Feedback>

            </Form.Group>

            <Form.Group controlId="form_password">
                <Form.Label >Password</Form.Label>
                <Form.Control  required isInvalid={itsFieldError("password", error)} type="password" placeholder="Password" onChange={e=>{setPassword(e.target.value)}} />
                <Form.Control.Feedback type="invalid">
                    {getFieldError("password", error)}
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
                <Button type="submit">
                    {is_pending ? <Spinner animation="border" size="sm"/>: undefined}
                    Sign In
                </Button>
                
            </Form.Group>
            <FormError error_set={error}/>

        </Form>
    )

}

const SignIn = (props)=>{
    console.log(props);
    const width = getWidthForm();
    const [redirect, setRedirect] = useState(false);
    const redirect_path = props.location.state === null ? URLS.home : props.location.state.from.pathname;    

    
    if(redirect)
        return <Redirect to={redirect_path}/>

    return (
        <div style={{"width": `${width}`}} className="www">
            <h3> Sign In </h3>
                <SignInForm setRedirect={setRedirect}/>
        </div>
    )

}

export {SignIn as default}