import React, { Component } from 'react';
import axios from 'axios';
import BrandSearch from '../brandSearch/BrandSearch';
import ProductDetails from '../productDetails/ProductDetails';
import BrandFilter from '../brandFilter/BrandFilter';
import Auxiliary from '../../hoc/Auxiliary';
import styles from './brandFinder.module.css';
import InfiniteScroll from "react-infinite-scroll-component";

class BrandFinder extends Component {

    state = {
        inputText : "",
        products : [],
        filteredProducts : [],
        error : false,
        countries : [],
        defaultMessage : "Blank",
        showSideDrawer: true,
        pageNo : 0,
        isLoading : false
    }
    productSeachHandler = () => {
        const val = this.state.inputText;
        const requestMap = {
            PAGE_SIZE: 10,
            PAGE_NO: this.state.pageNo,
            INPUT_TEXT: val
        }
       
        axios.post("/search", requestMap)
                .then( response => {  
                    let countriesSet = null;
                    if(this.state.inputText){//This condition for specific search
                        countriesSet = new Set();
                        this.setState({
                            filteredProducts : response.data.response,
                            products : response.data.response,
                            isLoading: false
                        });
                        response.data.response.map(obj=>{
                            countriesSet.add(obj.country);
                            return true;
                        });

                        this.setState({countries : countriesSet});

                        if(response.data.response.length===0){
                            this.setState({
                                defaultMessage : "Brand infromation not found...",
                                pageNo: 0
                            });
                        }
                    }else{
                        countriesSet = new Set();
                        if(this.state.isLoading){
                            this.setState({
                                filteredProducts : this.state.filteredProducts.concat(response.data.response),
                                products : this.state.products.concat(response.data.response)
                            });
                        }else{
                            this.setState({
                                filteredProducts : response.data.response,
                                products : response.data.response
                            });
                        }
                       
                        this.state.products.map(obj=>{
                            countriesSet.add(obj.country);
                            return true;
                        });

                        if(response.data.response.length===0){
                            if(this.state.pageNo===0){
                                this.setState({
                                    defaultMessage : "Brand infromation not found..."});
                            }
                            this.setState({
                                pageNo: 0,
                                isLoading: false
                            });
                        }else{
                            const pageNo = this.state.pageNo + 1;
                            this.setState({
                                defaultMessage : null,
                                pageNo : pageNo,
                                isLoading : true,
                                countries : countriesSet
                            });
                        }
                    }

                })
                .catch( err => {
                    console.log(err);
                    this.setState({
                        error: true, 
                        defaultMessage: "Something went wrong!",
                        isLoading : false
                    });
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
                
                <InfiniteScroll
                    dataLength = {this.state.products.length}
                    next = {this.productSeachHandler}
                    hasMore = {true}
                    loader = {
                        this.state.isLoading ? 
                            <h4 style={{textAlign: "center"}}>Loading...</h4> : ""
                        }>
                        <section className={styles.BrandFinder}>
                            {products}
                        </section>
                </InfiniteScroll>
            </Auxiliary>
        );
    }
}

export default BrandFinder;