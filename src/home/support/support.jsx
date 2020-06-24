import React from "react";
import {Route, Switch} from "react-router-dom";

import URLS from "home/routing_urls";

import Ideas from "./ideas";


const Support = (props) =>{

    return (
        <Switch>
            <Route path={URLS.support.ideas} component={Ideas}/>
        </Switch>
    )
}


export {Support as default};