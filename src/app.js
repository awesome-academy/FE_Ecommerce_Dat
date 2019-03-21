import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from './utils/router';
import routes from './routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    { renderRoutes(routes) }
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;
