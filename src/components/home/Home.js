import React, { Component } from 'react';
import axios from 'axios';
import styles from './home.module.css';
import BrandSearch from '../brandSearch/BrandSearch';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ProductDetails from '../productDetails/ProductDetails';


class Home extends Component {

    state = {
        inputText : "",
        products : [],
        error : false
    }
    productSeachHandler = () => {
        const val = this.state.inputText;
        axios.get("/search?inputText=" + val)
                .then( response => {
                    this.setState({products : response.data.response});
                })
                .catch( err => {
                    console.log(err);
                    this.setState({error: true})
                });
    }
    handleChangeValue = (e) => {
        this.setState({inputText: e.target.value});
    }

    render () {
        let products = <p>Something went wrong!</p>;
        if(!this.state.error){
            products = this.state.products.map(product => {
                return <ProductDetails 
                            key={product.id} 
                            brandName={product.brandName} 
                            category={product.category}
                            country={product.country} 
                            link={product.link} />
            });
        }
        return (
            <div>
                <section className={styles.BrandInfo}>
                    <Header/>
                </section>
                <section>
                    <BrandSearch 
                            inputText={this.state.inputText} 
                            clicked = {this.productSeachHandler}
                            changed = {this.handleChangeValue}/>
                </section>
                <section className={styles.BrandInfo}>
                    {products}
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        );
    }
}

export default Home;