const RestaurantCard = ({ resData }) => {
  const { resName, cuisines, rating, time, img } = resData;

  return (
    <article
      className="
         bg-white
          dark:bg-neutral-900/85
          rounded-2xl
          shadow-md
          transition
          hover:-translate-y-1
          hover:shadow-xl
          hover:bg-[#FFF1EC]
          hover:dark:bg-neutral-900/95
      "
    >
      {/* Image */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={img}
          alt={resName}
          className="
            h-full
            w-full
            rounded-t-2xl
            object-cover
            transition-transform
            duration-300
          "
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-1">
        <h3 className="truncate text-base font-semibold text-neutral-800 dark:text-neutral-300">
          {resName}
        </h3>

        <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
          {cuisines}
        </p>

        <div className="flex items-center justify-between pt-2 text-sm text-neutral-600">
          <span className="flex items-center gap-1 font-medium text-green-600">
            ⭐ {rating}
          </span>

          <span>{time}</span>
        </div>
      </div>
    </article>
  );
};

export const withPromotionLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div
        className="
          relative
          transition 
          rounded-2xl
          hover:-translate-y-1
          hover:shadow-xs
        "
      >
        <label
          className="
            absolute
            top-2
            left-2
            z-10
            bg-red-500
            text-white
            px-2
            py-1
            rounded-full
            text-xs
            font-bold
            transition-transform
            duration-300
            group-hover:-translate-y-1
          "
        >
          Promoted
        </label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};



export default RestaurantCard;
