import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { Button } from 'antd';
import Home from './Home';
import About from './About';
import PropTypes from 'prop-types';

@withRouter
@connect(
    (state) => ({
        state
    })
)
export default class App extends Component {
    static propTypes = {
        state: PropTypes.object
    }

    render() {
        // eslint-disable-next-line
        console.log(this.props.state);
        return (
            <div>
                <h1>App</h1>
                <p>url: { this.props.state.common.url }</p>
                <Switch>
                    <Redirect from='/' to='/index' strict exact />
                    <Route path="/index" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
                <div><Button type="primary" onClick={() => this.handleClick()}>2333</Button></div>
                
            </div>
        );
    }

    handleClick() {
        // eslint-disable-next-line
        console.log('click');
    }
}