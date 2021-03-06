import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import Link from 'next/link';
import { withApollo } from '~/lib/apollo';
import { GET_CATEGORY } from '~/gql/home';
import Layout from '~components/layout';

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
    const category = data.categoryList[0].children;
    return (
        <Fragment>
            <Layout>
                <ul className="list level0">
                    { category.map((data, i)=>{
                        return (
                            <li key={i} className="category-list">
                                <Link href={"/category/[id]"} as={"/category/"+data.id} >
                                    <a>
                                        {data.name}
                                    </a>
                                </Link>

                                <ul className="list level1">
                                    {data.children.map((data,i)=>{
                                        return (
                                            <li key={i} className="category-list">
                                                <Link href={"/category/[id]"} as={"/category/"+data.id} >
                                                    <a>
                                                        {data.name}
                                                    </a>
                                                </Link>
                                                <ul className="list level2">
                                                    {data.children.map((data,i)=>{
                                                        return (
                                                            <li key={i} className="category-list">
                                                                <Link href={"/category/[id]"} as={"/category/"+data.id} >
                                                                    <a>
                                                                        {data.name}
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}
                                                </ul>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </li>
                        );
                    }) }
                </ul>
            </Layout>
        </Fragment>
    );
};

export default withApollo(Home);