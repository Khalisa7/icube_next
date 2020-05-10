import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { withApollo } from '~/lib/apollo';
import { GET_CATEGORY } from '~/gql/home';
import Layout from '~components/layout';
import ProductGrid from '~/components/product-grid';

const Home = () => {
    const { loading, error, data } = useQuery(GET_CATEGORY);
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
                <ul className="list">
                    { data.categoryList[0].children.map((data, i)=>{
                        return (
                            <li key={i} className="category-list">
                                <Link href={`/category/${data.url_path}`} as={`/category/${data.id}`}>
                                    <a>
                                        {data.name}
                                    </a>
                                </Link>
                            </li>
                        );
                    }) }
                </ul>
            </Layout>
        </Fragment>
    );
};

export default withApollo(Home);