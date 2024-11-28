import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 md:p-6 mb-6 hover:shadow-xl transition-shadow duration-300 w-full"
        >
          {/* Left Section: Price, Title, Description */}
          <div className="flex-1 space-y-2">
            <div className="flex space-x-2">
              <h3 className="text-lg md:text-xl font-bold text-gray-800">
                {item?.card?.info?.name}
              </h3>
              <span className="text-sm md:text-base font-semibold text-green-600">
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice/100}
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-600">
              {item?.card?.info?.description}
            </p>
          </div>

          {/* Right Section: Image and Add Button */}
          <div className="relative flex-1">
            <img
              src={`${CDN_URL}${item?.card?.info?.imageId}`}
              alt={item?.card?.info?.name}
              className="w-full h-32 md:h-40 object-contain rounded-lg"
            />
            <button className="absolute top-2 right-2 bg-green-600 text-white font-semibold px-3 py-1 rounded-md shadow-md hover:bg-green-700 transition-colors duration-300">
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
