import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import { withApollo } from '~/lib/apollo';
import { GET_PRODUCTS } from '~/gql/product';
import Layout from '~components/layout';
import ProductDetail from '~/components/product-detail';


const ProductPage = () => {
    const { slug } = useRouter().query;
    const { loading, error, data } = useQuery(GET_PRODUCTS, {variables : { urlKey:slug }} );
    console.log(data);
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
                <ProductDetail
                    id={data.id}
                    name={data.products.items[0].name}
                    image={data.products.items[0].image}
                    description={data.products.items[0].description.html}
                    product_sku={data.products.items[0].sku}
                    price={data.products.items[0].price_range.minimum_price}
                />
            </Layout>
        </Fragment>
    );
};

export default withApollo()(ProductPage);