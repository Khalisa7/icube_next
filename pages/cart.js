import React, { Fragment, useState } from 'react';
import { withRedux } from '~/lib/redux';
import { connect } from 'react-redux';
import Layout from '~components/layout';

const mapStateToProps = state => {
    return {
        data: state
    }
}

const _Render = ({data = undefined}) => {
    console.log(data);
    return (
        <Fragment>
            <Layout>
                
            </Layout>
        </Fragment>
    );
};

const ProductForm = connect(mapStateToProps, null)(_Render);

export default withRedux(ProductForm);