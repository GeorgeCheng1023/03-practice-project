import {useContext} from 'react'
import classes from './MealsItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../contexts/CartContext'

const MealsItem = props => {
  const meal = props.meal;
  const cartContext = useContext(CartContext)
  const addItemToCartHandler = amount => {
    cartContext.addItem({
      id: meal.id,
      name:meal.name,
      price: meal.price,
      amount: amount,
    })
  }
  return (
    <li className={classes.meal}>
      <div>
      <h3>{meal.name}</h3>
      <div className={classes.description}>{meal.description}</div>
      <div className={classes.price}>${meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm meal={meal} onAddItemToCart={addItemToCartHandler}/>
      </div>
      
    </li>
    
  )
}

export default MealsItem;
