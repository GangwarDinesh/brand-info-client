import React, { Component } from "react";
import styles from './pojoConverter.module.css';
import Auxiliary from "../../hoc/Auxiliary";

class PojoConverter extends Component{

    render () {
        return (
            <Auxiliary>
                <section className={styles.PojoConverter}>
                    <textarea cols="100" rows="20"></textarea>
                </section>
                <section className={styles.ButtonSection}>
                    <button  className={styles.Button} type="Submit">Generate</button>
                </section>
            </Auxiliary>
        );
    }
}

export default PojoConverter;