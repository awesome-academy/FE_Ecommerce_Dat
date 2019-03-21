import _ from 'lodash';
import React from 'react';
import { Route } from 'react-router-dom';

export const renderRoutes = (routes) => {
    var result = null;
    if (routes.length > 0) {
        result = _.map(routes, (route, index) => {
            if (route.authRequest) {
                return (
                    <AuthenticatedComponent>
                        <Route path={route.path} exact={route.exact} component={route.main} />
                    </AuthenticatedComponent>
                )
            }
            return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
        })
        return result;
    }
}