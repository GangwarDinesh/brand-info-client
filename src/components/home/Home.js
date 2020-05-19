import React, { Component } from 'react';
import axios from 'axios';
import styles from './home.module.css';
import BrandSearch from '../brandSearch/BrandSearch';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ProductDetails from '../productDetails/ProductDetails';
import BrandFilter from '../brandFilter/BrandFilter';


class Home extends Component {

    state = {
        inputText : "",
        products : null,
        filteredProducts : [],
        error : false
    }
    productSeachHandler = () => {
        const val = this.state.inputText;
        axios.get("/search?inputText=" + val)
                .then( response => {
                    this.setState({filteredProducts : response.data.response});
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

    filterHandler = (e) => {
        const val = e.target.value;
        if(val === "All"){
            this.setState({filteredProducts: this.state.products});
        }else{
            const updatedProducts = this.state.products.filter(p => {return p.country === val});
            this.setState({filteredProducts: updatedProducts});
        }
    }

    render () {
        let products = <p>Something went wrong!</p>;
        let countries = new Set();
        let options = "";
        if(!this.state.error){
            products = this.state.filteredProducts.map(product => {
                countries.add(product.country);
                return <ProductDetails 
                            key={product.id} 
                            brandName={product.brandName} 
                            category={product.category}
                            country={product.country} 
                            link={product.link} />
            });
            options = Array.from(countries).map(key => {
                return <option value={key}>{key}</option>;
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
                {
                    this.state.products?(
                        <section className={styles.BrandInfo}>
                            <BrandFilter 
                                changed={this.filterHandler}
                                options = {options} />
                        </section>):""
                }
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