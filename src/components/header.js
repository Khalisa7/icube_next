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
                <h3>
                    <span className="link-homepage"><Link href="/" as="/"><a>Icube Training Result</a></Link></span>
                    <span><Link href="/cart" as="/cart"><a>Cart ({data === undefined? 0: data.length}  )</a></Link></span>
                </h3>
            </div>
        </Fragment>
    );
};

const Header = connect(mapStateToProps, null)(_Render);

export default withRedux(Header);