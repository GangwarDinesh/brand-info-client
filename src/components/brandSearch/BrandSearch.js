import React, { Component } from 'react';
import styles from './brandSearch.module.css';


class BrandSearch extends Component{
    render() {
        return (
            <div className={styles.BrandSearch}>
                <label>Product Name : </label>
                <input type="text" />
                <button >Search</button>
            </div>
        );
    }
}

export default BrandSearch;