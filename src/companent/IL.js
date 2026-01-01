import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { removeItem } from "../utils/cartSlice";

const ItemList = ({ items, index, showAddButton }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
    console.log(item);
  };

  return (
    <div
      className="
        relative
        mt-4
        flex
        flex-col
        sm:flex-row
        sm:items-center
        gap-4
        sm:gap-8
        p-4
        rounded-xl
        border-[1px]
        border-gray-200
        bg-white
        hover:shadow-md
        transition
        dark:bg-neutral-700/30
        dark:border-none
      "
      key={items.name}
    >
      {/* Image */}
      <img
        src={items.img}
        alt={items.name}
        className="
          w-20
          h-20
          rounded-lg
          object-cover
          flex-shrink-0
          mx-auto
          sm:mx-0
        "
      />

      {/* Info */}
      <div className="flex-1 space-y-2 text-center sm:text-left">
        <div className="text-base font-semibold text-gray-800 dark:text-neutral-300">
          {items.name}
        </div>
        <div className="text-sm font-medium text-gray-600 dark:text-neutral-300">
          {items.price}
        </div>
      </div>

      {/* Add Button */}
      {showAddButton && (
        <button
          className="
            static
            sm:absolute
            sm:right-4
            sm:top-1/2
            sm:-translate-y-1/2
            px-3
            py-1
            text-sm
            font-semibold
            text-green-700
            bg-white
            border
            border-green-600
            rounded-full
            hover:bg-green-600
            hover:text-white
            transition
            w-full
            sm:w-auto
            dark:bg-neutral-700/30
          "
          onClick={() => handleAddItem(items)}
        >
          Add +
        </button>
      )}

      {/* Remove Button */}
      {!showAddButton && (
        <button
          className="
            static
            sm:absolute
            sm:right-4
            sm:top-1/2
            sm:-translate-y-1/2
            px-3
            py-1
            text-sm
            font-semibold
            text-red-700
            bg-white
            border
            border-red-600
            rounded-full
            hover:bg-red-600
            hover:text-red-100
            transition
            w-full
            sm:w-auto
            dark:text-neutral-300
            dark:bg-neutral-700
          "
          onClick={() => handleRemoveItem(index)}
        >
          Remove
        </button>
      )}
    </div>
  );
};

export default ItemList;
