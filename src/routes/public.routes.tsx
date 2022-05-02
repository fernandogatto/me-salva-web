import React from 'react';

import { Route, Switch } from 'react-router-dom';

import * as Modules from './modules';

const PublicRoutes = (): JSX.Element => {
    return (
        <Switch>
            <Route
                path="/"
                component={Modules.Home}
                exact
            />
        </Switch>
    );
}

export default PublicRoutes;
