import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
  const handleClick=()=>{
    setShowIndex();
  }
  return (
    <>
      <div className="w-6/12 m-auto border-b my-4 p-4 border-gray-500">
        <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
          <span>
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems&&<ItemList items={data?.itemCards} />}
      </div>
      {/* According Body */}
    </>
  );
};

export default RestaurantCategory;
