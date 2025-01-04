import React from "react";
function SearchProducts ({setSearchQuery}) { 
  return (
    
    <input
      type="text"
      placeholder="Search for products..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );

}
export default SearchProducts;     