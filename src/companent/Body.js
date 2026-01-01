import RestaurantCard, {
  withPromotionLabel,
} from "./RestaurantCard";

import useOnlinestatus from "../utils/useOnlinestatus";
import { Link } from "react-router-dom";
import PosterImages from "./Posterimg";

/* ---------------- Poster Images ---------------- */
<PosterImages />

/* ---------------- Body ---------------- */

const Body = ({ listOfRestaurants, onTopRated }) => {
  const onlineStatus = useOnlinestatus();

  const RestaurantCardPromoted =
    withPromotionLabel(RestaurantCard);

  if (!onlineStatus) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <h1 className="text-xl font-semibold text-red-500 dark:text-neutral-300">
          Looks like you're offline 😕
        </h1>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-[1400px] px-6 py-6">
      {/* Heading */}
      <h3 className="mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-200">
        Best offers for you !!
      </h3>

      {/* Posters */}
      <PosterImages />

      {/* Filters */}
      <div className="my-6">
        <button
          onClick={onTopRated}
          className="
            rounded-full
            bg-[#FF7A7A]
            px-5
            py-2
            font-semibold
            text-white
            shadow-md
            transition
            hover:bg-[#FF5C5C]
            hover:shadow-lg
          "
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Grid */}
      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listOfRestaurants.length === 0 ? (
          <h3 className="col-span-full text-center text-neutral-500 dark:text-neutral-200">
            No restaurants found
          </h3>
        ) : (
          listOfRestaurants.map((restaurant) => (
            <Link
              key={restaurant.id}
              to={`/restaurants/${restaurant.id}`}
              className="block"
            >
              {restaurant.promoted ? (
                <RestaurantCardPromoted
                  resData={restaurant}
                />
              ) : (
                <RestaurantCard
                  resData={restaurant}
                />
              )}
            </Link>
          ))
        )}
      </section>
    </main>
  );
};

export default Body;
