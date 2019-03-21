import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home'
import Login from './containers/Login';
import Register from './containers/Register';
class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        )
    }
}
export default App;
