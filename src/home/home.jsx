import React from "react";
import {Route, Switch} from 'react-router-dom';




import Header from "./header/header";

import "css/home/home.css";

import {Form, Button} from 'react-bootstrap';


import SignIn from "./sign_in/sign_in";

export default function Home(props){
    console.log(props)
    const user = props.user;

    return (
        <>
        <Header user={user}/>
        <Switch>
            <Route path="/" exact></Route>
            <Route path="/sign_in/" exact> <SignIn/>  </Route>
            <Route path="/sign_up" exact> <div> A sign up page</div> </Route>
            <Route path="/logout/" exact> <div> A logout page</div> </Route>
            <Route path="/settings/" exact> <div> A sssettings page</div> </Route>
            <Route path="/about/" exact> <div> A About page</div> </Route>
            <Route path="/support/"exact> <div> As ssSupport page</div> </Route>
        </Switch>
        </>
    );

    
}





