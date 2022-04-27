import {useContext} from 'react';
import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
import CartContext from '../../contexts/CartContext'
import CartItem from './CartItem'

const dummy_cart = [
  {id: 'm1', name: 'Banana', amount: 4, price: 10.00},
]

const total = dummy_cart.reduce((tol, meal) => {
  return tol + (meal.price * meal.amount)
}, 0).toFixed(2);

const Cart = props => {
  const cartContext = useContext(CartContext);
  const addItemHandler = item => {
    return (cartContext.addItem({...item, amount:1}))
  }
  return (
    <>
      {cartContext.isDisplay && (
        <Modal>
          <ul className={classes['cart-items']}>
            {cartContext.items.map((item) => 
              <CartItem 
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.amount}
                item={item}
                onAdd={addItemHandler.bind(null, item)}
              />
            )}
          </ul>
          <div className={classes.total}>
            <span>Total</span>
            <span>{`$${cartContext.totalPrice.toFixed(2)}`}</span>
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