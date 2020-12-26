import React, { Component } from 'react';
import SignupComponent from '../SignupComponent/SignupComponent';
import LoginComponent from '../LoginComponent/LoginComponent';
import Dashboard from '../Dashboard/Dashboard';
import Navbar from '../Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>MY ASSIGNMENT</h1>
                <section>
                    <Switch>
                        <Route path='/signup' exact component={SignupComponent} />
                        <Route path='/login' exact component={LoginComponent} />
                        <Route path='/dashboard' exact component={Dashboard} />
                    </Switch>
                </section>
            </div>
        );
    }
}

export default Layout;