import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const[showItems,setShowItems]=useState(false);
  const [showIndex,setShowIndex]=useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, id } =
    resInfo?.cards[2]?.card?.card?.info || {};
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //     ?.card || {};
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen p-6 md:p-12">
      {/* Restaurant Info Section */}
      <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-10 mb-10 text-center border border-blue-200">
        <h1 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
          {name}
        </h1>
        <p className="text-blue-700 text-lg md:text-2xl mb-2">
          {cuisines?.join(", ")}
        </p>
        <span className="inline-block bg-blue-100 text-blue-700 font-medium text-sm md:text-lg px-4 py-2 rounded-lg">
          {costForTwoMessage}
        </span>
      </div>
      {/* Accordian */}
      {categories.map((category,index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index===showIndex ?true:false}
            setShowIndex={()=>setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
