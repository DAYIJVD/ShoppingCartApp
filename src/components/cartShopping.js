import React, { useContext } from 'react';
//context
import { reducer_Context } from '../context/reducerContext';
//icons
import Cart from './shared/cart';

//css
import styles from "./css/cartShopping.module.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const CartShopping = () => {
     const {State,dispatch}=useContext(reducer_Context)
    return (<div className={styles.cartShopping}>
        <div>
          {
          State.selectedItems.map(item=><Cart key={item.id} data={item}/>)
          }  
        </div>
        <div className={styles.checkOut}>
            {State.checkOut&&<div>
             <p>Thank You For Your Purchase ! </p>
             <a href="/">+ Buy More</a>
            </div>}
        {Boolean(State.selectedItems.length)?<div>
            <h3>total: {State.total?State.total:"0"}$</h3>
                <h2>products:{State.itemsCounter}</h2>
                <button onClick={()=>dispatch({type:"CheckOut"})}>CheckOut</button>
                <button onClick={()=>dispatch({type:"Clear"})}>CLEAR</button>
                </div>:<div className={styles.empty}>
                  {State.checkOut?"":<><h3>Your Shopping Cart is Empty</h3> <Link to="/">+ Click to go to the product purchase page!</Link></>}
                    </div>}
        </div>
        </div>
    );
};

export default CartShopping;