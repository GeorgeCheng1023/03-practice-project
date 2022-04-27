import React, {useState} from 'react';

const CartContext = React.createContext({

})

export const CartContextProvider = props => {
  const [isDisplay, setDisplay] = useState(false);

  const showHandler = props => {
    setDisplay(true);
  }

  const hideHandler = props => {
    setDisplay(false);
  }
  return (
    <CartContext.Provider value={{
      isDisplay: isDisplay,
      onShow: showHandler,
      onHide: hideHandler
    }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartContext
