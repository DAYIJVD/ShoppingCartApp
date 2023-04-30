import React, { useContext } from 'react';
//style-sheets
import styles from "./css/navbar.module.css";
import { reducer_Context } from '../context/reducerContext';
import { Link } from 'react-router-dom';


import cart from "./shop.svg"
const Navbar = () => {
    const {State}=useContext(reducer_Context);
    return (
        <div className={styles.Navbar}>
           <Link className={styles.Product} to="/"><h3>Product</h3></Link>
            <div>
                <Link to="/shoppingCart"><img className={styles.icon} src={cart} alt="icon"  /></Link>
                <span className={styles.counter}>{State.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;