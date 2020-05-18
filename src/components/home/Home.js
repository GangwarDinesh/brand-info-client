import React, { Component } from 'react';
import axios from 'axios';
import styles from './home.module.css';
import BrandSearch from '../brandSearch/BrandSearch';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ProductDetails from '../productDetails/ProductDetails';


class Home extends Component {

    state = {
        products : [
            {
                id: 1,
                brandName : "Bisleri",
                category : "Water",
                country : "India",
                link : "https://amazon.in"
            },
            {
                id: 2,
                brandName : "Bisleri",
                category : "Water",
                country : "India",
                link : "https://amazon.in"
            },
            {
                id: 3,
                brandName : "Bisleri",
                category : "Water",
                country : "India",
                link : "https://amazon.in"
            },
            {
                id: 4,
                brandName : "Bisleri",
                category : "Water",
                country : "India",
                link : "https://amazon.in"
            },
            {
                id: 5,
                brandName : "Bisleri",
                category : "Water",
                country : "India",
                link : "https://amazon.in"
            },
            {
                id: 6,
                brandName : "Bisleri",
                category : "Water",
                country : "India",
                link : "https://amazon.in"
            },
            {
                id: 7,
                brandName : "Bisleri",
                category : "Water",
                country : "India",
                link : "https://amazon.in"
            },
            {
                id: 8,
                brandName : "Bisleri",
                category : "Water",
                country : "India",
                link : "https://amazon.in"
            }

        ],
        error : false
    }
    /*componentDidMount(){
        axios.get("/posts")
                .then( response => {
                    this.setState({products : response.data});
                })
                .catch( err => {
                    console.log(err);
                    this.setState({error: true})
                });
    }*/
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
                    <BrandSearch/>
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