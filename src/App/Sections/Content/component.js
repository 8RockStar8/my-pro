import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Pages from './../../Pages';

function Content() {
    return (
        <div className="content">
            <div className="content-center">
                <Switch>
                    <Route path="/" component={ Pages } />
                </Switch>
            </div>
        </div>
    );
}

export default Content;
