import React from 'react';
import ProductItem from './ProductItem';
import { connect } from 'react-redux';

class ProductList extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.props.products.map(product => (
                            <div className="col-3" key={product.id}>
                                <ProductItem product={product} />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productReducer.products
    }
}

export default connect(mapStateToProps)(ProductList);