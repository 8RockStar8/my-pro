import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Users from './Users';
import User from './User';

function MyComponents() {
    return (
        <Switch>
            <Route path="/users" component={Users} />
            <Route path="/user" component={ User } />
        </Switch>
    );
}

export default MyComponents;
