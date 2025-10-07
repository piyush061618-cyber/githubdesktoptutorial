import React from 'react'
import '../styles/card.css'

const Card =({item ,handleClick}) =>{

    const {title ,author ,price ,imgsrc} =item
    return(
        <div className='cards'>
            <div className='image_box'>
                  <img src ={imgsrc} alt={item.title}/> 
            </div>
            <div className='details'>
               <h3>{title}</h3>
               <p>{author}</p>
               <p>Price -{price}</p>
               <button onClick={() => handleClick(item)}>Add to Cart</button>
               

            </div>
          
        </div>
    )
}
export default Card
