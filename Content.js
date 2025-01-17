import React from "react";
import './Content.css';
import Itemslist from "./Itemslist"; 
const  Content=({items,handleCheck,handleDelete}) =>{
  return (
    <Itemslist 
    items={items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
    />
  )
}

export default Content
