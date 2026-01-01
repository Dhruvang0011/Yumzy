import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mockdata from "../utils/mockdata";
import RestaurantCategory from "./RestaurantCategory";
import ItemList from "./IL";

const RestaurantMenu = ({ restaurantIndex = null }) => {
  const [showIndex, setShowIndex] = useState(null);
  const [restaurants] = useState(mockdata);
  const [menuSections, setMenuSections] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const params = useParams();

  let restaurant = null;
  if (params?.id) {
    const idParam = params.id;
    restaurant = restaurants.find((r) => r.id === idParam);
  }
  if (!restaurant && restaurantIndex !== null) {
    restaurant = restaurants[restaurantIndex];
  }
  if (!restaurant)
    return (
      <div className="flex justify-center items-center h-64 text-xl font-semibold text-gray-600">
        No restaurant found
      </div>
    );

  const ratingNum = parseFloat(restaurant.rating) || 0;

  useEffect(() => {
    setMenuSections(restaurant.dishes);
  }, [restaurant]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 ">
      {/* SINGLE BACKGROUND CONTAINER */}
      <div className="bg-white/90 rounded-2xl shadow-xl p-6 space-y-8 dark:bg-neutral-800/90">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={restaurant.img}
            alt={restaurant.resName}
            className="w-full md:w-64 h-44 object-cover rounded-xl dark:text-neutral-400"
          />

          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-neutral-300">
              {restaurant.resName}
            </h2>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="relative inline-block text-lg leading-none">
                <span className="text-gray-300">★★★★★</span>
                <span
                  className="absolute left-0 top-0 overflow-hidden text-green-600"
                  style={{ width: `${(ratingNum / 5) * 100}%` }}
                >
                  ★★★★★
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-700 dark:text-neutral-300">
                {ratingNum.toFixed(1)}
              </span>
            </div>

            <div className="text-sm font-medium text-gray-700 dark:text-neutral-300">
              {restaurant.cuisines}
              <div>{restaurant.time}</div>
              <div className="text-sm text-gray-600 dark:text-neutral-300">
              <div>{restaurant.costForTwo}</div>
              
            </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap  border-gray-200 border-t pt-4 dark:border-neutral-400">
          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
              ${
                selectedFilter === "all"
                  ? "bg-gray-900 text-white dark:bg-neutral-900"
                  : "bg-gray-100 hover:bg-gray-200 dark:text-neutral-500 dark:bg-neutral-100"
              }`}
            onClick={() => {
              setSelectedFilter("all");
              setMenuSections(restaurant.dishes);
            }}
          >
            All
          </button>

          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
              ${
                selectedFilter === "veg"
                  ? "bg-green-600 text-white"
                  : "bg-green-100 text-green-600 hover:bg-green-200"
              }`}
            onClick={() => {
              setSelectedFilter("veg");
              const vegOnly = restaurant.dishes
                .map((section) => ({
                  ...section,
                  items: section.items.filter((item) => item.type === "veg"),
                }))
                .filter((section) => section.items.length > 0);

              setMenuSections(vegOnly);
            }}
          >
            🥦 Veg
          </button>

          <button
            className={`px-4 py-2 rounded-full text-sm font-semibold transition
              ${
                selectedFilter === "non-veg"
                  ? "bg-red-600 text-white"
                  : "bg-red-100 text-red-700 hover:bg-red-200"
              }`}
            onClick={() => {
              setSelectedFilter("non-veg");
              const nonVegOnly = restaurant.dishes
                .map((section) => ({
                  ...section,
                  items: section.items.filter(
                    (item) => item.type === "non-veg"
                  ),
                }))
                .filter((section) => section.items.length > 0);

              setMenuSections(nonVegOnly);
            }}
          >
            🍗 Non-Veg
          </button>
        </div>

        {/* Menu Sections */}
        <div className="space-y-6">
          {menuSections.map((section, si) => (
           <div
             key={si}
             className="
             rounded-xl
              border
             border-gray-200
              p-4
              transition
              hover:border-gray-300
              hover:shadow-md
              dark:hover:shadow-2xl
              dark:bg-neutral-800
              dark:border-none
               "
              >

              <h3 className="text-lg font-semibold text-gray-800 mb-3 dark:text-neutral-300">
            <RestaurantCategory data={section} showItems={si=== showIndex ? true : false}
               setShowIndex = {() =>
              setShowIndex((prev) => (prev === si ? null : si))} />
              </h3>

              <div className="space-y-3">
                {/* ItemList goes here */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default RestaurantMenu;
