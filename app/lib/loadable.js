import React from 'react';
import { Icon } from 'antd';
import Loadable from 'react-loadable';

function loadable(loader) {
    return Loadable({
        loader,
        // eslint-disable-next-line react/display-name
        loading: () => <div>loading...</div> // <Icon type="loading" style={{ margin: '0 auto', display: 'block' }} />
    });
}

export default loadable;