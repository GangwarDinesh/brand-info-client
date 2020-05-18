import React, { Component } from 'react';
import axios from 'axios';
import styles from 'brandInfo.module.css';
import BrandSearch from '../brandSearch/BrandSearch';
import Header from '../header/Header';
import Footer from '../footer/Footer';


class BrandInfo extends Component {

    state = {
        products : [],
        error : false
    }
    componentDidMount(){
        axios.get("/posts")
                .then( response => {
                    this.setState({products : response.data});
                })
                .catch( err => {
                    console.log(err);
                    this.setState({error: true})
                });
    }
    render () {
        let products = <p>Something went wrong!</p>;
        if(!this.state.error){
            products = this.state.products.map(product => {
               
            });
        }
         
        return (
            <div>
                <section className="Posts">
                    <header/>
                </section>
                <section>
                    <BrandSearch/>
                </section>
                <section>
                    {products}
                </section>
                <section>
                    <Footer />
                </section>
            </div>
        );
    }
}

export default BrandInfo;