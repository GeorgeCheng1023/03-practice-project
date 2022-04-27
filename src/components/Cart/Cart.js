import {useContext} from 'react';
import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
import CartContext from '../../contexts/CartContext'

const dummy_cart = [
  {id: 'm1', name: 'Banana', amount: 4, price: 10.00}
]

const cartItems = dummy_cart.map(meal => <li>{meal.name}</li>)
const total = dummy_cart.reduce((tol, meal) => {
  return tol + (meal.price * meal.amount)
}, 0).toFixed(2);



const Cart = props => {
  const cartContext = useContext(CartContext);

  return (
    <>
      {cartContext.isDisplay && (
        <Modal>
          <ul className={classes['cart-items']}>{cartItems}</ul>
          <div className={classes.total}>
            <span>Total</span>
            <span>{`$${total}`}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={cartContext.onHide} >Close</button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      )}
    </>
  )
}

export default Cart