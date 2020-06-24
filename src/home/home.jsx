import React ,{useState, useRef, useLayoutEffect} from "react";
import {Route, Switch} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';

import PrivateRoute from "_components/private_route";


import Header from "./header/header";
import SignIn from "./sign_in/sign_in";
import Support from "./support/support";

import "css/home/home.css";






export default function Home(props){
    const [height_header, setHeightHeader] = useState(0);
    console.log(height_header)
    const height_content = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)-height_header;
    return (
        <>
        <Header setHeightHeader={setHeightHeader} />
        <div style={{"height":`${height_content}px`}}>
            <Switch>
                <Route path="/" exact></Route>
                <Route path="/sign_in/" component={SignIn}exact/>
                <Route path="/sign_up/" exact> <div> A sign up page</div> </Route>
                <Route path="/settings/" exact> <div> A sssettings page</div> </Route>
                <Route path="/about/" exact> <div> A About page</div> </Route>
                <Route path="/support/" component={Support}/>

            </Switch>
       
        </div>
        </>
    );

    
}





