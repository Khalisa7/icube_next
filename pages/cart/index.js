import React, { Fragment, useState } from 'react';
import { withRedux } from '~/lib/redux';
import { connect } from 'react-redux';
import Layout from '~components/layout';

const mapStateToProps = state => {
    return {
        data: state.cart
    }
}

const _Render = ({data = undefined}) => {
    const [qty, setQty] = useState(1);

    const addQty = () => {
        setQty(qty + 1)
    }
    const substractQty = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    if(data===undefined || data.length === 0) {
        return (
            <Fragment>
                <Layout>
                    <h1>
                        Kosong
                    </h1>
                </Layout>
            </Fragment>
        )
    }
    
    return (
        <Fragment>
            <Layout>
                <ul className="cart">
                    { data.map((data,i)=>{
                        return (
                            <li key={i}>
                                <div className="cart-item">
                                    <div className="item-image">
                                        <img src={data.product_image} alt={data.product_name}/>
                                    </div>
                                    <div className="item-detail">
                                        <h3 className="m-0">{data.product_name}</h3>
                                        <h3 className="m-0">$ {data.product_price}</h3>
                                    </div>
                                </div>
                            </li>
                        );
                    }) }
                </ul>
            </Layout>
        </Fragment>
    );
};

const ProductForm = connect(mapStateToProps, null)(_Render);

export default withRedux(ProductForm);