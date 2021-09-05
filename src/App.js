import React,{useState,useEffect} from 'react'
import "./App.css";
import Header from "./components/Header";
import { CartContext } from './CartContext';

function App() {
  const [cart, setCart] = useState({});
  //Fetch cart data from local storage
  useEffect(() => {
    const cart = window.localStorage.getItem('cart');
   // console.log(JSON.parse(cart));
    setCart(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
 
  }, [cart]);
  return (
    <div className="App">
      <CartContext.Provider value={{ cart,setCart }}>
      <Header></Header>
      </CartContext.Provider>
    
    </div>
  );
}

export default App;

