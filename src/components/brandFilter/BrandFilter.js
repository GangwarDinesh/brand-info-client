import React from 'react';
import styles from './brandFilter.module.css';

const brandFilter = ( props ) => {

    let content = <p className={styles.Message}>{props.message}</p>;
    if("Blank" === props.message){
        content = "";
    }
    else if(null === props.message){
        content = <div className={styles.BrandFilter}>
                    <div className={styles.Row}>            
                        <div className={styles.Column}>
                            <h3>Brand Details</h3>
                        </div>

                        <div className={styles.Column}>
                            <p style={{display: "inline-block", paddingRight: "10px"}}>Filter By : </p> 
                            <select defaultValue={'All'} className={styles.Select} onChange={props.changed} >
                                <option value="All">All</option>
                                {props.options}
                            </select>
                            
                        </div>   
                    </div>
                </div>;
            }
    return ( 
            <React.Fragment>
                {content}
            </React.Fragment>);
}

export default brandFilter;