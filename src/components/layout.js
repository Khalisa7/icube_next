import React, { Fragment } from 'react';
import Header from '~/components/header';

const Layout = ({children}) => {
    return (
        <Fragment>
            <div className="layout">
                <Header active/>
                {children}
            </div>
        </Fragment>
    );
};

export default Layout;