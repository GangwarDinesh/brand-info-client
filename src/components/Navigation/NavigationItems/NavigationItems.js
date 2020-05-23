import React from 'react';
import styles from './navigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active>Brand Finder</NavigationItem>
        <NavigationItem link="/" >Pojo Converter</NavigationItem>
    </ul>
);

export default navigationItems;
