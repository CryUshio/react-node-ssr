import React from 'react';
import { Icon } from 'antd';
import Loadable from 'react-loadable';

function loadable(loader) {
    return Loadable({
        loader,
        // eslint-disable-next-line react/display-name
        loading: () =>  <Icon type="loading" style={{ margin: '0 auto', display: 'block' }} /> // <div>loading...</div>
    });
}

export default loadable;