import React from 'react';
import styles from './productDetails.module.css';

const productDetails = (props) => (
    <article className={styles.ProductDetails}>
        <div className="Info">
            <div className={styles.ProductInfoSection}>
                <p> 
                    <span style={{fontWeight: 'bold'}}>Brand name : </span> {props.brandName}
                </p>
                <p> 
                    <span style={{fontWeight: 'bold'}}>Category : </span>{props.category}
                </p>
                <p> 
                    <span style={{fontWeight: 'bold'}}>Product based on : </span>
                    <span>
                        {
                            props.country === "India" ? 
                            <span style={{color : "green", fontWeight: "bold"}}>{props.country}</span> : 
                            props.country
                        }</span>
                </p>
                <p>
                    {
                        props.country === "India" && props.country !== null ? 
                                <a href={props.link}>Click here to Buy</a> : "" 
                    }
                    
                </p>
            </div>
        </div>
    </article>
);

export default productDetails;