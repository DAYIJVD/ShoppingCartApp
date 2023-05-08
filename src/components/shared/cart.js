import React, { useContext } from 'react';
//context
import { reducer_Context } from '../../context/reducerContext';
//functions
import {isInCart,quantityCounter } from '../helper/founctions';
//icons
import trash from "../trash.svg" 
//css
import styles from "../css/cart.module.css"
const Cart = ({data}) => {
    const {State,dispatch}=useContext(reducer_Context)
    return (
        <div className={styles.cart}>
         <img className={styles.product} alt="product" src={data.image} /> 
        <p>{State.itemsCounter}</p>
         <div className={styles.buttons}>
         {
             isInCart(State,data.id)&&
             <button className={styles.increase} onClick={()=>dispatch({type:"Increase",payload:data})}>+</button>
            }
            {
            quantityCounter(State,data.id)>1&&<button className={styles.decrease} onClick={()=>dispatch({type:"Decrease",payload:data})}>-</button>
            }
            {
            quantityCounter (State,data.id)===1&&<button className={styles.remove} onClick={()=>dispatch({type:"Remove_Item",payload:data})}><img className={styles.icon} src={trash} alt="icon"/></button>
            }
         </div>
         </div>
    );
};

export default Cart;