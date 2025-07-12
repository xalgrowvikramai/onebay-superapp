import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../screens/Home';
import Product from '../screens/Product';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';
import Login from '../screens/Login';

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product/:id" component={Product} />
                <Route path="/cart" component={Cart} />
                <Route path="/profile" component={Profile} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );
};

export default Routes;