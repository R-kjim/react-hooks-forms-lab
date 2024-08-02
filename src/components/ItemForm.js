import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import items from "../data/items";

function ItemForm({onItemFormSubmit}) {
  const [select1,selectFn]=useState("Produce")//select state handler
  const [inputName,inputFn]=useState('item')//item name input handler
  const [data,dataFn]=useState(items)
  function produceFn(event){
    selectFn(event.target.value)
  }
  function inputFns(event){
    inputFn(event.target.value)
  }

  // function to handle form submit
  function submitFn(event){
    event.preventDefault()
    const newItem={
      id:uuid(),
      name:inputName,
      category:select1
    }
    {onItemFormSubmit(newItem)}
  }
  

  //function that updates our items list
  // function 



  return (
    <form className="NewItem" onSubmit={submitFn}>
      <label>
        Name:
        <input type="text" name="name" value={inputName} onChange={inputFns}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={produceFn}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
