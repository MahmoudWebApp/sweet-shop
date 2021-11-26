import React, {useState} from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Sweets from './components/Sweets/Sweets';
import CartProvider from './store/CartProvider';

const App = () => {
  const [cartIsShow,setCartIsShow]=useState(false);
  const showCartHandler=()=>{
    setCartIsShow(true);
  }
  const hiddenCartHandler=()=>{
    setCartIsShow(false);
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hiddenCartHandler}/>}
      <Header onShow ={showCartHandler}/>
      <main>
      <Sweets/>
      </main>
      </CartProvider>
  )
}

export default App

