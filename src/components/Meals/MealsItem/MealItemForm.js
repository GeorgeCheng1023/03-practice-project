import {useContext, useRef, useState} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input/Input'
const MealsForm = props => {
  const meal = props.meal;
  const inputRef = useRef();
  const submitHandler = event => {
    event.preventDefault();
    const amount = +inputRef.current.value;
    props.onAddItemToCart(amount);

  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label='Amount'

        input={{
          id: `amount_${meal.id}`,
          type: 'number',
          min: '0',
          max: '10',
          step: '1',
          defaultValue: '0'
        }}
      /> <button >+ Add</button>
    </form>
  )
}

export default MealsForm