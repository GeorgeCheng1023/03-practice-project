import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
  return (
    <>
      <header className={classes['header']}>
        <h1>Order your meal</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes['main-image']}>
        <img alt='header' src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"></img>
      </div>
  </>
  )
}

export default Header;