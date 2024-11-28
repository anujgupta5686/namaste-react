import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useState, useEffect ,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  const {setUserName,loggedInUser}=useContext(UserContext);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [newData, setNewData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromted = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      // const data = await fetch(
      //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // );
      const res = await data.json();

      const restaurants =
        res.data.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
      setNewData(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="text-center text-lg text-red-600 mt-10">
        You are offline. Please check your internet connection.
      </h1>
    );

  if (newData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="p-4 md:p-8">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-6">
        {/* Search Bar */}
        <div className="flex flex-1 items-center gap-2">
          <input
            type="text"
            placeholder="Search restaurants..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 shadow-md transition-all"
            onClick={() => {
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
        <div className="flex gap-1 items-center">
          <label className="text-md font-bold text-slate-500">Username: </label>
          <input
            type="text"
            placeholder="Type Here..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            value={loggedInUser}
            onChange={(e)=>setUserName(e.target.value)}

          />
        </div>
        {/* Top Rated Button */}
        <button
          className="mt-4 sm:mt-0 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 shadow-md transition-all sm:self-end sm:ml-4"
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

      {/* Restaurants Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
            className="hover:scale-105 transform transition-transform duration-300"
          >
            {/* If the restaurant is promoted then add a promoted level */}
            {restaurant.info.promoted ? (
              <RestaurantCardPromted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
