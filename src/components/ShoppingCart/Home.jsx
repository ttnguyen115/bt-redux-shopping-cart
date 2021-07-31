import React from 'react';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import { connect } from 'react-redux';

class Home extends React.Component {

    render() {
        return (
            <div>
                <h1 className="text-center">Cart Exercise</h1>
                <p className="text-center" data-toggle="modal" data-target="#modelId">
                    Cart: {this.props.quantity}
                </p>

                <ProductList />
                { this.props.selectedProduct && <Details /> }
                <Cart />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedProduct: state.productReducer.selectedProduct,
        quantity: state.cartReducer.quantity,
    }
}

export default connect(mapStateToProps)(Home);