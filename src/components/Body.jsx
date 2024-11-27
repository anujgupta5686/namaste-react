import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  console.log("Re-Render after change input value");
  // State Variable - Super powerful variable

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [newData, setNewData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    // setLoading(true);
    try {
      // const data = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // );
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const res = await data.json();
      console.log(
        "Data::",
        res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      // console.log("Response::", res);

      const restaurants =
        res.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
      setNewData(restaurants);
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
      console.error("Error fetching data:", error);
    }
  };
  if (newData.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className=" body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              // Filter the restaurant cards and update the UI
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setNewData(filteredRestaurants);
              console.log(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setNewData(filteredList);
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {newData.map((restaurent) => {
          return (
            <Link key={restaurent.info.id} to={`/restaurants/${restaurent.info.id}`}>
              <RestaurantCard resData={restaurent} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
