import React,{createContext, useReducer} from 'react';

const reducer_Context=createContext();
const initialState={
    selectedItems:[],
    itemsCounter:0,
    totol:0,
    checkOut:false
}
const sumItems = items => {
    const itemsCounter = items.reduce((total,Product)=>
        total+Product.quantity
    , 0);
    let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter, total}
}
const stateReducer=(state,action)=>{
    switch(action.type){
    case "Add_Item":
    if(!state.selectedItems.find(item=>item.id===action.payload.id)){
    state.selectedItems.push({
        ...action.payload,
        quantity:1
    })
    }
    return{
        ...state,
        selectedItems:[...state.selectedItems],
        ...sumItems(state.selectedItems)
    }
    case "Remove_Item":
    const Remove_Index=state.selectedItems.findIndex(item=>item.id===action.payload.id);
    state.selectedItems[Remove_Index].quantity=0;
    const NewSelectedItems=state.selectedItems.filter(item=>item.id!==action.payload.id)
    return{
        ...state,
        selectedItems:[...NewSelectedItems],
        ...sumItems(state.selectedItems)
    }
    case "Increase":
   const IndexI=state.selectedItems.findIndex(item=>item.id===action.payload.id);
     state.selectedItems[IndexI].quantity++;
     return{
        ...state,
        ...sumItems(state.selectedItems)
     }
    case "Decrease":
        const IndexD=state.selectedItems.findIndex(item=>item.id===action.payload.id);
        state.selectedItems[IndexD].quantity--;
        return{
            ...state,
            ...sumItems(state.selectedItems)
         }
    case "CheckOut":
    return{
        selectedItems:[],
        itemsCounter:0,
        totol:0,
        checkOut:true
    }
    case "Clear":
        return{
            selectedItems:[],
            itemsCounter:0,
            totol:0,
            checkOut:false
        }
    default:
        return state
    }
    
}


const ReducerContextProvider = ({children}) => {
    const [State,dispatch]=useReducer(stateReducer,initialState)
    return (
           <reducer_Context.Provider value={{State,dispatch}}>
            {children}
           </reducer_Context.Provider>
    );
};

export {ReducerContextProvider,reducer_Context} ;