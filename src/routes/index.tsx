import React from 'react';

import {
    BrowserRouter as Router,
} from 'react-router-dom';

import PublicRoutes from './public.routes';

const Routes = (): JSX.Element => {
    return (
        // <Router basename={process.env.PUBLIC_URL}>
        <Router>
            <PublicRoutes />
        </Router>
    );
}

export default Routes;
