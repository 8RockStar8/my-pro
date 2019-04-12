import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Users from './Users';
import User from './User';
import PageNotFound from './PageNotFound';

function Pages() {
    return (
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/home" component={ Home } />
            <Route path="/users" component={Users} />
            <Route path="/user/:login" component={ User } />
            <Route component={ PageNotFound } />
        </Switch>
    );
}

export default Pages;
