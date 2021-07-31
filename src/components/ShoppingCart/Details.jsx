import React from 'react';
import { connect } from 'react-redux';

class Details extends React.Component {
    render() {
        const { img, name, backCamera, frontCamera, description, screen } = this.props.selectedProduct
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <h4>{name}</h4>
                        <img src={img} alt="img" className="w-100"/>
                    </div>

                    <div className="col-8">
                        <h4>Information</h4>
                        <table className="table">
                            <tr>
                                <td>Screen</td>
                                <td>{screen}</td>
                            </tr>
                            <tr>
                                <td>Front Camera</td>
                                <td>{frontCamera}</td>
                            </tr>
                            <tr>
                                <td>Back Camera</td>
                                <td>{backCamera}</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{description}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedProduct: state.productReducer.selectedProduct
    }
}

export default connect(mapStateToProps)(Details);