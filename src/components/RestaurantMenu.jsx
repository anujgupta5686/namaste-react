import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();

  const resInfo=useRestaurantMenu(resId);
  console.log("resInfo::",resInfo);
  if (resInfo === null) return <Shimmer />;
  //   const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <>
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <p>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</p>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{" "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
    </>
  );
};

export default RestaurantMenu;
