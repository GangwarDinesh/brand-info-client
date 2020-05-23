import React, { Component } from 'react';
import styles from './home.module.css';
import Footer from '../footer/Footer';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import { Route } from 'react-router-dom';
import BrandFinder from '../brandFinder/brandFinder';
import PojoConverter from '../pojoConverter/PojoConverter';

class Home extends Component {

    state = {
        showSideDrawer: false
    }
    sideDrawerToggleHandler = () => {
        this.setState( prevState => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    sideDrawerClosedHandler = () =>{
        this.setState({
            showSideDrawer: false
        });
    }

    render () {

        return (
            <div>
                <section className={styles.BrandInfo}>
                    <Toolbar drawerToggleClicked = {this.sideDrawerToggleHandler} />
                    <SideDrawer 
                        open={this.state.showSideDrawer} 
                        closed={this.sideDrawerClosedHandler}/>
                </section>
                
                <Route path="/" exact component={BrandFinder} ></Route>
                <Route path="/pojo-converter" component={PojoConverter} ></Route>
                <section>
                    <Footer />
                </section>
            </div>
        );
    }
}

export default Home;