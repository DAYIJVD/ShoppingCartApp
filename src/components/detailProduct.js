import React,{useContext} from 'react';
//functions
import {isInCart,quantityCounter } from './helper/founctions';
//Products Context
import { ContextProducts } from '../context/productsContextProvider';
import { reducer_Context } from '../context/reducerContext';

//icon
import trash from "./trash.svg"

//
import styles from "./css/detail.module.css"
import { Link } from 'react-router-dom' ;


const DetailProduct = (props) => {
    const{State,dispatch}=useContext(reducer_Context)
    const id=props.match.params.id
    const Products=useContext(ContextProducts);

    const Product =Products[id-1] ;
    return (
        <div className={styles.conteiner}>
        <div className={styles.cart}>
         <img alt='product' src={Product.image} className={styles.Product} />
           <div className={styles.details}>
            <h2>{Product.title}</h2>
            <p>{`${Product.price} $`}</p>
            <p>
                {Product.description}
            </p>
            <div className={styles.back}>
               
                <Link to="/">Back</Link>
            </div>
            <div className={styles.buttons}>
            {
             isInCart(State,Product.id)?
             <button className={styles.increase} onClick={()=>dispatch({type:"Increase",payload:Product})}>+</button>:
             <button className={styles.add} onClick={()=>dispatch({type:"Add_Item",payload:Product})}>Add Product</button>
            }
            {
            quantityCounter(State,Product.id)>1&&<button className={styles.decrease} onClick={()=>dispatch({type:"Decrease",payload:Product})}>-</button>
            }
            {
            quantityCounter (State,Product.id)===1&&<button className={styles.remove} onClick={()=>dispatch({type:"Remove_Item",payload:Product})}><img src={trash} alt="icon"/></button>
            }
            </div> 
           </div>
        </div>
        </div>
    );
};

export default DetailProduct;