import React from 'react'

const Lineitem = ({item,handleCheck,handleDelete}) => {
  return (
    <main className="counter-container">
     
      <ul className="counter-list">
       
         
          <li className="counter-item">
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
              className="counter-checkbox"
            />
            <label
              className={`counter-label ${item.checked ? "checked" : ""}`}
              onDoubleClick={() => handleCheck(item.id)}
            >
              {item.item}
            </label>
            <button className="delete-button" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
          
    
      
      </ul>
    </main>
  
    )
  }
  

export default Lineitem