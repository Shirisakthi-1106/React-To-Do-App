import  React from 'react'
import Lineitem from './Lineitem'

const Itemslist = ({items,handleCheck,handleDelete}) => {
  return (
    <main className="counter-container">
     
      <ul className="counter-list">
       
         {items.map((item) => 

         <Lineitem 
         item={item}
         key={item.id}
         handleCheck={handleCheck}
         handleDelete={handleDelete}
         />  
        )}   
      </ul>
    </main>
  
    )
  }
  
export default Itemslist