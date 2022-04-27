import React, {useState, useReducer} from 'react';

const CartContext = React.createContext()

const cartReducer = (state, action) => {
  if(action.type === 'ADD'){
    const updateItems = state.items.concat(action.item);
    const updateTotalAmount = state.totalAmount + action.item.amount
    const updateTotalPrice = state.totalPrice + action.item.amount * action.item.price
    return{
      items: updateItems,
      amount: updateTotalAmount,
      price: updateTotalPrice,
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
    console.log(item)
    cartDispatcher({type: 'ADD', item: item})
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
