import React, {useState, useReducer} from 'react';

const CartContext = React.createContext()

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updateTotalAmount = state.totalAmount + action.item.amount
    const updateTotalPrice = state.totalPrice + action.item.amount * action.item.price
    let foundIndex = state.items.findIndex(item => item.id === action.item.id);
    
    let updateItem 
    if(foundIndex > -1){
      updateItem = state.items.map(item => item.id === action.item.id ? {...item, amount: item.amount + action.item.amount} : item)
    }else{
      updateItem = state.items.concat(action.item)
    }
    
    return {
      items: updateItem,
      totalAmount: updateTotalAmount,
      totalPrice: updateTotalPrice,
    }
    
  }else if(action.type === 'REMOVE'){

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

  const removeItemHandler = id => {
    cartDispatcher({type: 'REMOVE', id: id})
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
