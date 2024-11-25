import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
// ResList Array of Object data

const Body = () => {
  // State Variable - Super powerful variable

  const [listOfRestaurants,setListOfRestaurants]=useState(
   resList
  );
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Login Here
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* Restaurant Cards */}
        {listOfRestaurants.map((restaurent) => {
          return (
            <RestaurantCard key={restaurent.info.id} resData={restaurent} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
