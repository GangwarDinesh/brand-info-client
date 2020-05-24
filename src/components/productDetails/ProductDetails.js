import React, { Component } from 'react';
import styles from './productDetails.module.css';

class ProductDetails extends Component{
    
    render() {
        let country = "";
        let link = "";
        if(this.props.country === "India"){
            country = <span style={{color : "#008000", fontWeight: "bold"}}>{this.props.country}</span>;
            link = <a href={this.props.link}>Click here to Buy</a>;
        }else if(this.props.country === "China"){
            country = <span style={{color : "#FF0000", fontWeight: "bold"}}>{this.props.country}</span>;
        }else{
            country = <span style={{color : "#FFA500", fontWeight: "bold"}}>{this.props.country}</span>;
            link = <a href={this.props.link}>Click here to Buy</a>;
        }
        return (
                <article className={styles.ProductDetails}>
                        <div className="Info">
                            <div className={styles.ProductInfoSection}>
                                <p> 
                                    <span style={{fontWeight: 'bold'}}>Brand name : </span> {this.props.brandName}
                                </p>
                                <p> 
                                    <span style={{fontWeight: 'bold'}}>Category : </span>{this.props.category}
                                </p>
                                <p> 
                                    <span style={{fontWeight: 'bold'}}>Product based on : </span>
                                    <span>{country}</span>
                                </p>
                                <p>{link}</p>
                            </div>
                        </div>
                    </article>
        );
    }
}
export default ProductDetails;