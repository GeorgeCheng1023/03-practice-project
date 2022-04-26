import classes from './AvailableMeals.module.css';
import Card from '../UI/Card/Card'
import MealsItem from './MealsItem/MealsItem'
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvalibleMeals = props => {
  const mealList = DUMMY_MEALS.map((meal) => 
    <MealsItem
      id={meal.id}
      key={meal.id}
      meal={meal}
    />
  );
  return (
    <div className={classes.meals}>
      <ul><Card>{mealList}</Card></ul>
    </div>
  )
}

export default AvalibleMeals;