import React, { Component } from 'react';
import styles from './GlassDressing.module.css';
import ProductList from './ProductList';
import { connect } from 'react-redux';

class GlassDressing extends Component {
    render() {
        return (
            <div className={styles.wrapper} style={{ backgroundImage: 'url(/glassesImage/background.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} >
                <div className={styles.content}>
                    <h2 className={styles.title}>Try glasses app online</h2>
                    <div className="container text-center" style={{ position: 'relative' }}>
                        <img className={styles.model} src="./glassesImage/model.jpg" alt="model" />
                        <span style={this.props.selectedGlasses ? { display: 'block'} : { display: 'none' }} className={styles.product} >
                            <img src={this.props.selectedGlasses?.url} style={{ width: '100%' }} alt="product" />
                        </span>
                        <div style={this.props.selectedGlasses ? { display: 'block'} : { display: 'none' }} className={styles.description}>
                            <h4>{this.props.selectedGlasses?.name}</h4>
                            <p>{this.props.selectedGlasses?.desc}</p>
                        </div>
                    </div>

                    <ProductList products={this.props.glassesList} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        glassesList: state.glassReducer.glassesList,
        selectedGlasses: state.glassReducer.selectedGlasses,
    }
}

export default connect(mapStateToProps)(GlassDressing);