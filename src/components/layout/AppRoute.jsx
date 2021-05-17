import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../views/Home';
const AppRoute = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>

            <Redirect to="/"/>
        </Switch>
    )
};

export default AppRoute;