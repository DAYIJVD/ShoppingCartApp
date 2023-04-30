import axios from "axios"

const getProducts = async () => {
   try {
   let res=[];
   res=(await axios.get("https://fakestoreapi.com/products/")).data
   return res
   } catch (error) {
   let res=[]
   return res
   }
   
};

export {getProducts};