import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import {CartContextProvider} from './contexts/CartContext'
function App() {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Cart/>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
