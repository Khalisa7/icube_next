import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { withRedux } from '~/lib/redux';

const mapStateToProps = ( state ) => {
    return {
        data: state.cart
    }
}

const _Render = ({active, data}) => {
    return (
        <Fragment>

            <div className="header">
                <h3>Icube Training Result <span><Link href="/cart" as="/order-cart"><a>Cart ({data === undefined? 0: data.length}  )</a></Link></span></h3>
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
        </Fragment>
    );
};

const Header = connect(mapStateToProps, null)(_Render);

export default withRedux(Header);