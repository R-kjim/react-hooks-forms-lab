import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  //use states to update our items dataset
  const [datas,handleDatas]=useState(items)
  //function that updates our array
  function updateArray(element){
    handleDatas([...datas,element])
  }


  const [selectedCategory, setSelectedCategory] = useState("All");


  const [searchName, handleSearch]=useState("testing")
   function handleSearchChange(event){
    handleSearch(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  
  //function to handle the displays
  function displayItem(item){
    let x=item.name.toLowerCase()
    if (item.category === selectedCategory) return item.category===selectedCategory
    // else if(item.name===searchName) return item.name===searchName
    else if(x.includes(searchName.toLowerCase())) return item.name
    else if(selectedCategory==="All" && searchName==='testing') return true
  }
  const itemsToDisplay=datas.filter(displayItem)

  


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={updateArray}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchName}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
