import React, { Component } from 'react';
import styles from './navigationItem.module.css';
import { NavLink } from 'react-router-dom';

class NavigationItem extends Component{

    render() {    
        return (
            <li className={styles.NavigationItem}>
                <NavLink exact 
                    to={this.props.link} 
                    activeClassName={styles.active}>
                    {this.props.children}
                </NavLink>
            </li>
            );
    }
}

export default NavigationItem;