import {useContext, useState, useEffect} from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../contexts/CartContext'
const HeaderCartButton = props => {
  const cartContext = useContext(CartContext);
  const [isHightLightButton, setIsHightLightButton] = useState(false);

  useEffect(() => {
    if(cartContext.items.length === 0) {
      return;
    }
    setIsHightLightButton(true);
    const timer = setTimeout(() => {
      setIsHightLightButton(false);
    }, 300)
    return () => {
      clearTimeout(timer);
    }
  }, [cartContext.items]
  )

  return (
  <button 
    className={`${classes.button} ${isHightLightButton && classes.bump}`} 
    onClick={cartContext.onShow}>
    <span  className={classes.icon} > <CartIcon/></span>
    <span> Your Cart </span>
    <span className={classes.badge}>{cartContext.totalAmount}</span>
  </button>)
}

export default HeaderCartButton;