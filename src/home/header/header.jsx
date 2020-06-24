import {Navbar, Nav, Container} from 'react-bootstrap';
import React, {useContext, useState, useEffect, useRef} from "react";


import routing_urls from "home/routing_urls";

import NavLink from "_components/nav_link";
import NavSupportItem from "./nav_support_item";
import NavSettingsItem from "./nav_settings_item";

import AUTHENTICATION from "_services/auth_service";
import { UserContext } from '../../_contexts';
import { useLayoutEffect } from 'react';


export default function Header(props){
    const targetRef = useRef()
    useLayoutEffect(()=>{
        if(targetRef.current){
            props.setHeightHeader(targetRef.current.offsetHeight)
        }
    })


    const authenticated = useContext(UserContext).authenticated;
    console.log(authenticated)
    return (
            <Navbar bg="dark" variant="dark" ref={targetRef}>
                <Navbar.Brand>Szamex Chater</Navbar.Brand>

                    <Nav className="mr-auto">
                        <NavLink to={routing_urls.home}>Home</NavLink>
                        {authenticated? <NavLink to={routing_urls.workspaces}>Workspaces</NavLink>: undefined}
                        <NavSupportItem/>

                    </Nav>
                                    
                    {authenticated ? 
                    <Nav>
                        <Nav.Item className="nav-link" onClick={()=>{AUTHENTICATION.logout()}}>Logout</Nav.Item>
                        <NavSettingsItem></NavSettingsItem>
                    </Nav>
                    :
                        <Nav>
                            <NavLink to={routing_urls.sign_in}>Sign In</NavLink>
                            <NavLink to={routing_urls.sign_up}>Sign up</NavLink>
                        </Nav>
                    }
            </Navbar>
     
      )
}