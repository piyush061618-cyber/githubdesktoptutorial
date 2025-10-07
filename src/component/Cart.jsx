// import React, { useState } from 'react'

// export default function Cart({cart ,setCart}) {
//     const [price ,setPrice] =useState(0);
//   return (
//     <div>
//     <h2>hello on cart page</h2> 
//     {  cart?.map((item) => (
//         <div className='cart_box' key ={item.id} >
//            <div className='cart_img'>
//                <img src ={item.imgsrc} alt={item.name}/>
//                <p>{item.title}</p>
//                <div >
//                  <button >+</button>
//                  <button>-</button>
//                  <button>Remove</button>

//                 </div>
//                 <div>
//                     <span>Price:{item.price}</span>
//                 </div>
//             </div>
//         </div>
//          ))
      
//     }
//     </div>
//   )
// }
import React, { useState, useEffect } from 'react'
import '../styles/Cart.css' ;  // ✅ create a CSS file for styling

export default function Cart({ cart, setCart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  // Update total price whenever cart changes
  useEffect(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity; // price × quantity
    });
    setTotalPrice(total);
  }, [cart]);

  // Increase quantity
  const handleIncrease = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Decrease quantity
  const handleDecrease = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Remove item
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div>
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item) => (
        <div className='cart_box' key={item.id}>
          <div className='cart_img'>
            <img src={item.imgsrc} alt={item.title} />
          </div>
          <div>
            <p>{item.title}</p>
            <div>
              <button onClick={() => handleIncrease(item.id)}>+</button>
              <span style={{ margin: "0 10px" }}>{item.quantity}</span>
              <button onClick={() => handleDecrease(item.id)}>-</button>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
            <div>
              <span>Price: ₹{item.price * item.quantity}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Total */}
      <div className='total'>
        <h3>Total Price: ₹{totalPrice}</h3>
      </div>
    </div>
  );
}


