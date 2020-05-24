import React from 'react';
import styles from './navigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <nav>
        <ul className={styles.NavigationItems}>
            <NavigationItem link="/" active>Home</NavigationItem>
            <NavigationItem link="/pojo-converter">Pojo Converter(For Developers)</NavigationItem>
        </ul>
    </nav>
);

export default navigationItems;
