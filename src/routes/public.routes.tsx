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

            <Route
                path="/cursos"
                component={Modules.Courses}
                exact
            />

            <Route
                path="/planos"
                component={Modules.Plans}
                exact
            />

            <Route
                path="/login"
                component={Modules.SignIn}
                exact
            />

            <Route
                path="/cadastrar"
                component={Modules.SignUp}
                exact
            />
        </Switch>
    );
}

export default PublicRoutes;
