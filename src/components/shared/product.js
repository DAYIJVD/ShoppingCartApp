import React ,{useContext}from 'react';
//context reducerstate
import { reducer_Context } from '../../context/reducerContext';
//functions
import { shortenTitle,isInCart,quantityCounter } from '../helper/founctions';

//css
import styles from "../css/product.module.css";
//icon
import trash from "../trash.svg"
//react-Router-dom
import {Link} from "react-router-dom";
const Product = ({dataProduct}) => {
    const {State ,dispatch}=useContext(reducer_Context);
    return (
        <div className={styles.cart}  >
           <img alt="product" src={dataProduct.image} />
           <h3>{shortenTitle(dataProduct.title)}</h3>
           <p>{`${dataProduct.price} $`}</p>
           <Link to={`/product/${dataProduct.id}`}>Detail</Link>
           <div className={styles.buttons}>
            {
             isInCart(State,dataProduct.id)?
             <button className={styles.increase} onClick={()=>dispatch({type:"Increase",payload:dataProduct})}>+</button>:
             <button className={styles.add} onClick={()=>dispatch({type:"Add_Item",payload:dataProduct})}>Add product</button>
            }
            {
            quantityCounter(State,dataProduct.id)>1&&<button className={styles.decrease} onClick={()=>dispatch({type:"Decrease",payload:dataProduct})}>-</button>
            }
            {
            quantityCounter (State,dataProduct.id)===1&&<button className={styles.remove} onClick={()=>dispatch({type:"Remove_Item",payload:dataProduct})}><img src={trash} alt="icon"/></button>
            }
            </div> 
        </div>
    );
};

export default Product;