import React from 'react';
import styles from './productDetails.module.css';

const productDetails = (props) => (
    <article className={styles.ProductDetails}>
        <h1></h1>
        <h1></h1>
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
                    <span>{props.country}</span>
                </p>
                <p>
                    <a href={props.link}>You can click here to buy</a>
                </p>
            </div>
        </div>
    </article>
);

export default productDetails;