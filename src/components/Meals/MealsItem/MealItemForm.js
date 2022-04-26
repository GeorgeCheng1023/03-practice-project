import classes from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'
const MealsForm = props => {
  const meal = props.meal;
  return (
    <form className={classes.form}>
      <Input
        label='Amount'
        input={{
          id: `amount_${meal.id}`,
          min: '1',
          max: '10',
          step: '1',
          defaultValue: '0'
        }}
      /> <button>+ Add</button>
    </form>
  )
}

export default MealsForm