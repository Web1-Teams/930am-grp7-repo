import React from "react";

function CategoryList({ categories }) {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <div key={category.id} className= "category-card" >
          <button className= "category-button ">{category.name}</button>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;