import React, { Component } from "react";
import styles from './pojoConverter.module.css';
import Auxiliary from "../../hoc/Auxiliary";
import axios from 'axios';

class PojoConverter extends Component{

    state = {
        inputJson : null,
        errorMessage : null
    }

    changeHandler = (e) => {
        this.setState({inputJson: e.target.value});
    }

    submitHandler = () => {
        const inputVal = this.state.inputJson;
        if(null !== inputVal){
            try {
                const parsedJson = JSON.parse(inputVal);
                this.setState({errorMessage: null});
                axios.post("/pojo/generate", parsedJson, {
                        responseType: 'arraybuffer',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(response => {
                        const url = window.URL.createObjectURL(new Blob([response.data]));
                        const link = document.createElement('a');
                        link.href = url;
                        link.setAttribute('download', 'JavaPojoFiles.zip');
                        document.body.appendChild(link);
                        link.click();
                    }).catch(error => {
                        console.log(error);
                        this.setState({errorMessage: 'Error occurred while processing your request.'});
                    })
            } catch (error) {
                console.log('Please enter a valid JSON');
                this.setState({errorMessage: 'Please enter a valid JSON'});
            }
        }else{
            console.log("Value should not be empty");
            this.setState({errorMessage: 'Please enter a valid JSON'});
        }
    }

    render () {
        return (
            <Auxiliary>
                <section className={styles.PojoConverter}>
                    <textarea cols="100" rows="20" onChange={this.changeHandler}></textarea>
                </section>
                <section className={styles.ErrorSection}>
                    <p>{this.state.errorMessage}</p>
                </section>
                <section className={styles.ButtonSection}>
                    <button className={styles.Button} onClick={this.submitHandler}>Generate</button>
                </section>
            </Auxiliary>
        );
    }
}

export default PojoConverter;