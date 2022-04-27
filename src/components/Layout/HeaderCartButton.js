import {useContext} from 'react'
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../contexts/CartContext'
const HeaderCartButton = props => {
  const cartContext = useContext(CartContext);

  return (<button className={classes.button} onClick={cartContext.onShow}>
    <span  className={classes.icon} > <CartIcon/></span>
    <span> Your Cart </span>
    <span className={classes.badge}>{cartContext.totalAmount}</span>
  </button>)
}

export default HeaderCartButton;