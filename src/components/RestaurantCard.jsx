import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({resData}) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime } = {},
} = resData?.info || {};
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: "#f0f0f0",
          borderRadius: "5px",
        }}
      >
        <img
          width={200}
          height={200}
          className="res-logo"
          src={CDN_URL+cloudinaryImageId}
          alt="Restaurant"
        />
        {/* <h3>{resData.card.card.gridElements.infoWithStyle[0].restaurants[0].info.name}</h3> */}
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    );
  };

  export default RestaurantCard;