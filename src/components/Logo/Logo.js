import React from 'react';
import logoUrl from '../../assets/images/logo.png';
import styles from './logo.module.css';

const logo = ( props ) => (
    <div className={styles.Logo} style={props.height}>
        <img src={logoUrl} alt="MyBurger" />
    </div>
);

export default logo;