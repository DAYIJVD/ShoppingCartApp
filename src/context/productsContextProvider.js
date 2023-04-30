import React,{useEffect,useState} from 'react';
import { getProducts } from '../services/api';

const ContextProducts=React.createContext();
const ProductsContextProvider = (props) => {
    const [dataProduct,setDataProducts]=useState([])
    useEffect(()=>{
        const FetchApi=async ()=>{
            setDataProducts(await getProducts())
        }
        FetchApi()
    })
    return (
        <ContextProducts.Provider value={dataProduct}>
          {props.children}
        </ContextProducts.Provider>
   );
};

export  {ProductsContextProvider,ContextProducts};