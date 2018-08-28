import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from '@/redux/common/action';

@connect(
    null,
    (dispatch) => ({
        action: bindActionCreators(commonActions, dispatch)
    })
)
export default class About extends Component {
    static propTypes = {
        action: PropTypes.object
    }

    componentDidMount() {
        this.props.action.putUrl('/about');
    }

    render() {
        return (
            <div className="about">
                <h1>About</h1>
                <Link to="/index">Link to index</Link>
            </div>
        );
    }   
}