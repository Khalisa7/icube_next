import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { withApollo } from '~/lib/apollo';
import { GET_CATEGORY } from '~/gql/category';
import Layout from '~components/layout';
import ProductGrid from '~/components/product-grid';


const CategoryPage = () => {
    const { id } = useRouter().query;
    const { loading, error, data } = useQuery(GET_CATEGORY, {variables : { id:id }} );
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
                <p>Loading</p>
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

export default withApollo()(CategoryPage);