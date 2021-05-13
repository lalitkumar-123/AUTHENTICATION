import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {Useauth} from './authcontext.js';

export default function Privaterout({component : Component, ...rest}) {
    const {currentuser} = Useauth();
    return (
        <Route {...rest}
            render={props => {
                return currentuser ? <Component {...props} /> : <Redirect to="/login"/>
             }}
        ></Route>
    )
}
