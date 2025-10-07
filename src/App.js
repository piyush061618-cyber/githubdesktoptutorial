import React, { useState } from 'react'
import NavBar from './component/NavBar'
import Shop from './component/Shop'
import './App.css'
import Cart from './component/Cart'


export default function App() {

  const[cart ,setCart] =useState([]);
  const[warning ,setWarning] =useState(false);
  const[show,setShow]=useState(true);

  const handleClick= (item) =>{
    let isPresent =false;
    cart.forEach((product) =>{
        if(item.id === product.id){
          isPresent =true;
        }
    })
    if(isPresent){
      setWarning(true);
      setTimeout(() =>{
         setWarning(false);
      } ,2000);
      return;
    }
     setCart([...cart, { ...item, quantity: 1 }]);

  }
  return (
    <div>
      <NavBar size ={cart.length} setShow ={setShow} />
      {
        show?
         <Shop handleClick ={handleClick}/> : 
        <Cart cart={cart} setCart={setCart}/>
      }
     
      {warning && <div className='warning'>
         Item is already present in your Cart
        </div>  
      }
    </div>
  )
}
