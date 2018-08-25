import React, { Component } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commonActions from '../../redux/common/action';

import './index.less';

@connect(
    null,
    (dispatch) => ({
        action: bindActionCreators(commonActions, dispatch)
    })
)
export default class Home extends Component {
    static propTypes = {
        action: PropTypes.object
    }

    componentDidMount() {
        this.props.action.putUrl('/index');
    }

    render() {
        return (
            <div className="index">
                Index.......
                <p>blue</p>
                <Link to="/about">Link to about</Link>
            </div>
        );
    }

}