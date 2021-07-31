import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAction } from './../../redux/actions/createAction';

class ProductList extends Component {
    handleSelectedGlasses = (product) => {
        this.props.dispatch(createAction('SELECT_GLASSES', product))
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <ul className="row text-center" style={{ listStyle: 'none' }}>
                    {
                        this.props.products.map(product => (
                            <li key={product.id} style={{ margin: '100px 10px' }}
                                onClick={() => this.handleSelectedGlasses(product)}
                            >
                                <img src={product.url} alt="product" style={{ width: '120px' }} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(ProductList);