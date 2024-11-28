import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla: { deliveryTime } = {},
  } = resData?.info || {};

  return (
    <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden transform hover:scale-[0.99] transition-transform duration-300">
      {/* Restaurant Image */}
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt={name}
        className="w-full h-48 object-cover"
      />
      {/* Restaurant Details */}
      <div className="p-4">
        {/* Name */}
        <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>

        {/* Cuisines */}
        <p className="text-sm text-gray-600 truncate">
          {cuisines.join(", ")}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <span className="text-sm text-yellow-600 font-semibold">
            {avgRating} ★
          </span>
        </div>

        {/* Cost and Delivery Time */}
        <div className="flex justify-between items-center text-sm text-gray-700 mt-3">
          <p>{costForTwo}</p>
          <p>{deliveryTime} mins</p>
        </div>
      </div>
    </div>
  );
};
// Higher Order Component
// input - RestaurantCard ==>RestaurantCardPromoted

export const withPromtedLabel=(RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-black text-whit p-2 m-2 rounded-lg">Promoted Restaurant Card</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}
export default RestaurantCard;
