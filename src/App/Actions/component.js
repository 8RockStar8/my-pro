import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Users from './Users';

function ActionCreators() {
    return (
        <Switch>
            <Route path="/users" component={ Users } />
        </Switch>
    );
}

export default ActionCreators;
