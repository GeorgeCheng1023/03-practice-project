import React, {useState, useReducer} from 'react';

const CartContext = React.createContext()

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updateTotalAmount = state.totalAmount + action.item.amount
    const updateTotalPrice = state.totalPrice + action.item.amount * action.item.price
    let foundIndex = state.items.findIndex(item => item.id === action.item.id);
    
    let updateItems
    if(foundIndex > -1){
      updateItems = state.items.map(item => item.id === action.item.id ? {...item, amount: item.amount + action.item.amount} : item)
    }else{
      updateItems = state.items.concat(action.item)
    }
    
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
      totalPrice: updateTotalPrice,
    }
    
  }else if(action.type === 'REMOVE'){
    const updateTotalAmount = state.totalAmount - action.item.amount;
    const updateTotalPrice = state.totalPrice - action.item.amount * action.item.price;
    let updateItems 
    let foundIndex = state.items.findIndex(item => item.id === action.item.id);
    let foundItem = state.items[foundIndex];
    if(foundItem.amount === action.item.amount){
      updateItems = state.items.filter(item => item.id !== action.item.id)
    }else{
      updateItems = state.items.map(item => item.id === action.item.id ? {...item, amount: item.amount - action.item.amount} : item)
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
      totalPrice: updateTotalPrice
    }
  }
}
const initCartState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
}

export const CartContextProvider = props => {
  const [isDisplay, setDisplay] = useState(false);
  const [cartState, cartDispatcher] = useReducer(cartReducer, initCartState);


  const showHandler = props => {
    setDisplay(true);
  }

  const hideHandler = props => {
    setDisplay(false);
  }

  const addItemHandler = item => {
    cartDispatcher({type: 'ADD', item: item})
    cartState.items.forEach(item => console.log(cartState.items))
  }

  const removeItemHandler = item => {
    cartDispatcher({type: 'REMOVE', item: item})
  }

  const Context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalPrice: cartState.totalPrice,
    addItem: addItemHandler,
    removeItem: removeItemHandler,

    isDisplay: isDisplay,
    onShow: showHandler,
    onHide: hideHandler
  }

  return (
    <CartContext.Provider value={Context}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext
