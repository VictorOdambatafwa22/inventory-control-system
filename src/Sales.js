import React from "react";
function Sales({handleSearch}) {
  return (
    <div >
       <form> 
      <input
       label htmlFor="search"
        type="text"
        placeholder="Search products by name"
        onChange={handleSearch}
      />
      </form>
    </div>
  );
}

export default Sales;