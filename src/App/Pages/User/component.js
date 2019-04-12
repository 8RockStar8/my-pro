import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Components from './../../Components';

function Users() {
    return (
        <Switch>
            <Route path="/user" component={ Components } />
        </Switch>
    );
}

export default Users;
