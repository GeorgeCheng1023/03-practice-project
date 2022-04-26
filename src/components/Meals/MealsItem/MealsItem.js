import classes from './MealsItem.module.css'
import MealItemForm from './MealItemForm'
const MealsItem = props => {
  const meal = props.meal;
  return (
    <li className={classes.meal}>
      <div>
      <h3>{meal.name}</h3>
      <div className={classes.description}>{meal.description}</div>
      <div className={classes.price}>${meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm meal={meal}/>
      </div>
      
    </li>
    
  )
}

export default MealsItem;
