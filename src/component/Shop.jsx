import React from 'react';
import list from '../list';
import Card from './Card';


export default function Shop({handleClick}) {
  return (
    <section>
        {list.map((item) =>(
             <Card item ={item} key={item.id} handleClick={handleClick}/>
        ))}
    </section>
  )
}
