import React, { Component } from 'react';
import styles from './navigationItem.module.css';
import { Link } from 'react-router-dom';

class NavigationItem extends Component{

    render() {    
        return (
            <li className={styles.NavigationItem}>
                <Link to={this.props.link} className={this.props.active ? styles.active : null}>
                    {this.props.children}
                </Link>
            </li>
            );
    }
}

export default NavigationItem;