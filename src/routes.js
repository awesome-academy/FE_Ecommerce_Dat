import React from 'react';
import Home from './containers/Home'
import NotFound from './pages/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        authRequest: false,
        main: () => <Home />,
    },
    {
        path: '',
        exact: true,
        authRequest: false,
        main: () => <NotFound />,
    }
]

export default routes