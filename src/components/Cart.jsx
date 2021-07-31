import React from 'react';
import { connect } from 'react-redux';
import { createAction } from './../redux/actions/createAction';

class Cart extends React.Component {
    handleAddToCart = (id) => {
        this.props.dispatch(createAction("ADD_QUANTITY", id));
    }

    handleRemoveFromCart = (id, quantity) => {
        quantity > 1
        ? this.props.dispatch(createAction("REMOVE_QUANTITY", id))
        : this.props.dispatch(createAction("REMOVE_PRODUCT", id)) 
    }

    render() {
        return (
            <div className="modal fade" id="modelId" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Shopping Cart</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product ID</th>
                                        <th>Product Name</th>
                                        <th>Image</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.cart.map(product => (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>
                                                <td>{product.name}</td>
                                                <img src={product.img} alt="img" style={{ height: '250px', width: '200px' }} />
                                                <td className="">
                                                    <button className="btn btn-info" onClick={() => this.handleRemoveFromCart(product.id, product.quantity)}>-</button>
                                                    <span className="m-2">{product.quantity}</span>
                                                    <button className="btn btn-info" onClick={() => this.handleAddToCart(product.id)}>+</button>
                                                </td>
                                                <td>{product.price}</td>
                                                <td>{product.price * product.quantity}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                            <button className="btn btn-primary" type="button">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cart,
    }
}

export default connect(mapStateToProps)(Cart);