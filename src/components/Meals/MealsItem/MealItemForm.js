import classes from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'
const MealsForm = props => {
  return (
    <form className={classes.form}>
      <Input
        label='Amount'
      /> <button>+ Add</button>
    </form>
  )
}

export default MealsForm