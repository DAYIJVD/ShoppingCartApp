import React ,{useContext,useState}from 'react';

//components
import Product from './shared/product';
//Products Context
import { ContextProducts } from '../context/productsContextProvider';

//cssStayle
import styles from "./css/store.module.css";

const Store = () => {
    const [error,setErorr]=useState("");
    const Products=useContext(ContextProducts);
    setTimeout(() => {
        setErorr("Your internet is not connected , Make sure you are connected to the Internet : (")
        }, 5000);
    return (<>
        {Products.length?<div className={styles.store}>
            {Products.map(product=><Product key={product.id} dataProduct={product}/>)}
        </div>:<div className={styles.loading}>
{error.length?<h2>{error}</h2>:<div className={styles.loader}>
  <div className={styles.loader_wheel}></div>
  <div className={styles.loader_text}></div>
  </div>}

  </div> }
        
        </>
    );
};

export default Store