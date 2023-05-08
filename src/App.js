//ContextPruducts component
import {ProductsContextProvider} from "./context/productsContextProvider";
import {ReducerContextProvider} from "./context/reducerContext";
//components
import Store from "./components/store";
import detailProduct from "./components/detailProduct";
import Navbar from "./components/navbar";
import CartShopping from "./components/cartShopping";
//react-Router-dom
import { Route,Switch ,Redirect} from "react-router-dom";
import Footer from "./components/footer";

import ScrolltoTop from "./components/ScrolltoTop";

function App() {
  return (
   <ProductsContextProvider>
    <ReducerContextProvider>
      <Navbar/>
      <ScrolltoTop>
    <Switch>
      <Route path="/Product/:id" component={detailProduct} /> 
      <Route path="/shoppingCart" component={CartShopping}/>
     <Route path="/" component={Store}/> 
     <Redirect from="/Product" to="/"/>
    </Switch>
    </ScrolltoTop>
    <Footer/>
    </ReducerContextProvider>
   </ProductsContextProvider>
  );
}

export default App;
