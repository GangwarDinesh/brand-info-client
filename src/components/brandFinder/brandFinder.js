import React, { Component } from 'react';
import axios from 'axios';
import BrandSearch from '../brandSearch/BrandSearch';
import ProductDetails from '../productDetails/ProductDetails';
import BrandFilter from '../brandFilter/BrandFilter';
import Auxiliary from '../../hoc/Auxiliary';
import styles from './brandFinder.module.css';

class BrandFinder extends Component {

    state = {
        inputText : "",
        products : [],
        filteredProducts : [],
        error : false,
        countries : [],
        defaultMessage : "Blank",
        showSideDrawer: true
    }
    productSeachHandler = () => {
        const val = this.state.inputText;
        axios.get("/search?inputText=" + val)
                .then( response => {
                    let countriesSet = new Set();
                    response.data.response.map(obj=>{
                        countriesSet.add(obj.country);
                    });
                    this.setState({
                        filteredProducts : response.data.response,
                        products : response.data.response,
                        countries : countriesSet
                    });
   
                    if(response.data.response.length===0){
                        this.setState({defaultMessage : "Brand infromation not found..."});
                    }else{
                        this.setState({defaultMessage : null});
                    }
                })
                .catch( err => {
                    console.log(err);
                    this.setState({error: true, defaultMessage: "Something went wrong!"});
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

    sideDrawerToggleHandler = () => {
        this.setState( prevState => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    sideDrawerClosedHandler = () =>{
        this.setState({
            showSideDrawer: false
        });
    }

    render () {
        let products = "";
        let options = "";
        if(!this.state.error){
            products = this.state.filteredProducts.map(product => {
                return <ProductDetails 
                            key={product.id} 
                            brandName={product.brandName} 
                            category={product.category}
                            country={product.country} 
                            link={product.link} />
            });
            options = Array.from(this.state.countries).map(key => {
                return <option key={key} value={key}>{key}</option>;
            });
        }

        return (
            <Auxiliary>
                <section>
                    <BrandSearch 
                            inputText={this.state.inputText} 
                            clicked = {this.productSeachHandler}
                            changed = {this.handleChangeValue}/>
                </section>
                {
                    this.state.products?(
                        <section className={styles.BrandFinder}>
                            <BrandFilter 
                                changed = {this.filterHandler}
                                options = {options}
                                message = {this.state.defaultMessage} />
                        </section>):""
                }
                <section className={styles.BrandFinder}>
                    {products}
                </section>
                
            </Auxiliary>
        );
    }
}

export default BrandFinder;