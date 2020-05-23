import React, { Component } from 'react';
import styles from './modal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';

class Modal extends Component{

    shouldComponentUpdate(prevProps, prevState){
        return prevProps.show !== this.props.show;
    }

    componentWillMount(){
        console.log('[Modal] - componentWillMount.')
    }

    render() {
        return(
            <Auxiliary>
                <Backdrop show={this.props.show} clicked = {this.props.modalClosed} />
                <div className={styles.Modal}
                    style = {{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                        }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
}

export default Modal;