import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { withApollo } from '~/lib/apollo';
import { GET_CATEGORY } from '~/gql/category';
import Layout from '~components/layout';
import ProductGrid from '~/components/product-grid';

const Home = () => {
    const { loading, error, data } = useQuery(GET_CATEGORY, {variables : {id:"2"}} );
    
    if (error) return (
        <Fragment>
            <Layout>
                <h4>Error Occured</h4>
            </Layout>
        </Fragment>
    );

    if (loading) return (
        <Fragment>
            <Layout>
                <h3>Loading</h3>
            </Layout>
        </Fragment>
    );

    return (
        <Fragment>
            <Layout>
                <ProductGrid data={data.categoryList[0].products.items}/>
            </Layout>
        </Fragment>
    );
};

export default withApollo()(Home);