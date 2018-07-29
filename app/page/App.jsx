import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import loadable from '../lib/loadable';
import propTypes from 'prop-types';

export default class App extends Component {
    static propTypes = {
        url: propTypes.string
    }

    state = {

    }

    UNSAFE_componentWillMount() {

    }

    render() {
        return (
            <div>
                <h1>App</h1>
                <h4>request url: { this.props.url }</h4>
                <Switch>
                    <Redirect from='/' to='/index' strict exact />
                    <Route path="/index" component={loadable(() => import('./index'))} />
                </Switch>
            </div>
        );
    }
}