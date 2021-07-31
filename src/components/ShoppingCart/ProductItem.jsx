import React from 'react';
import { connect } from 'react-redux';
import { createAction } from './../../redux/actions/createAction';

class ProductItem extends React.Component {
    handleSelectedProduct = (product) => {
        this.props.dispatch(createAction("SELECT_PRODUCT", product));
    } 

    handleAddToCart = (product) => {
        let newCart = [...this.props.cart];
        let index = newCart.findIndex(item => item.id === product.id)

        if (index === - 1) {
            let newProduct = { ...product, quantity: 1 };
            newCart.push(newProduct);
            this.props.dispatch(createAction("ADD_PRODUCT", newCart));
        } else {
            this.props.dispatch(createAction("ADD_QUANTITY", product.id));
        }
    }

    render() {
        const { img, name } = this.props.product;
        return (
            <div className="card p-3">
                <img src={img} alt="img" style={{ height: 250, width: "100%" }} />

                <h4>{name}</h4>

                <div className="">
                    <button className="btn btn-info mr-2" onClick={() => this.handleSelectedProduct(this.props.product)}>
                        Details
                    </button>

                    <button className="btn btn-danger mr-2" onClick={() => this.handleAddToCart(this.props.product)}>
                        Add to cart
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedProduct: state.productReducer.selectedProduct,
        cart: state.cartReducer.cart,
    }
}

export default connect(mapStateToProps)(ProductItem);