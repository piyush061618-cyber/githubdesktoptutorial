import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../styles/navbar.css'
export default function NavBar({size ,setShow}) {
  return (
   <nav>
       <div className ='nav_box'>
            <span className='my_shop'>
                📚 BookNest 
            </span>
            <div className='cart' onClick={() => setShow(prev => !prev)}>
                  <span>
                    <i className='fas fa-cart-plus'></i>
                  </span>
                  <span>{size}</span>
             </div>
       </div>
   </nav>
  )
}
