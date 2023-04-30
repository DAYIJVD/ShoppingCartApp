const shortenTitle=(title)=>{
  const ArraySplitedTitle=title.split(" ")
  const NewTitle=`${ArraySplitedTitle[0]} ${ArraySplitedTitle[1]}`
  return NewTitle
}
const isInCart=(state,id)=>{
  const result=state.selectedItems.find(item=>item.id===id);
  if(result===undefined){
    return false
  }else{
    return true
  }
}
const quantityCounter=(state,id)=>{
  const index=state.selectedItems.findIndex(item=>item.id===id);
  if(index===-1){
    return false
  }else{
    return state.selectedItems[index].quantity
  }
}





export {shortenTitle,isInCart,quantityCounter}