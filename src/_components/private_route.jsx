import React from "react";
import { Route, Redirect, UseContext } from "react-router";

import {UserContext} from "_contexts";
import AUTHENTICATION from "_services/auth_service";


const PrivateRoute = ({component:Component, ...args}) =>(
    <Route 
        {...args} 
        render = {(props) =>{
            const user = AUTHENTICATION.get_user();
            console.log(props)
            if (!user.authenticated)
                return <Redirect to={{pathname: '/sign_in/', state: {from: props.location}}}/>
            return <Component {...props}/>
            
        }}
    />    
);


export {PrivateRoute as default};