import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./home/home";

import {UserContext} from "_contexts";
import AUTHENTICATION from "_services/auth_service";


import 'css/app.css';




class App extends React.Component{
    constructor(props){
        super(props);
        AUTHENTICATION.get_current_session();


        this.state = {
            user: AUTHENTICATION.get_user(),
            header: 999,
        }
        
        AUTHENTICATION.add_subscriber((user)=>
            this.setState({user: user})
        );

    }

    render(){

        return (
            <UserContext.Provider value={this.state.user}>
                <Router>
                    <Route>
                        <Home/>
                    
                    
                    </Route>
                </Router>
            </UserContext.Provider>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById("root")
);