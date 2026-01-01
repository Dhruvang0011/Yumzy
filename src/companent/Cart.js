import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./IL";

const Cart = () => {
    console.log("Cart component rendered");
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-center px-4 py-8">
      {/* Card */}
      <div className="w-full max-w-4xl rounded-2xl bg-white p-6 shadow-lg dark:bg-neutral-800/80">
        
        {/* Header */}
        <div className="mb-6 flex items-center justify-between border-b-2 border-gray-200 pb-4 ">
          <h1 className="text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            Cart Items
            <span className="ml-2 text-neutral-700 dark:text-neutral-300">
              ({cartItems.length})
            </span>
          </h1>

          {cartItems.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="
                rounded-lg
                bg-blue-500
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition
                hover:bg-blue-600
              "
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Empty State */}
        {cartItems.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg font-semibold text-neutral-600 dark:text-neutral-300">
              Your cart is empty 🛒
            </p>
            <p className="mt-2 text-sm text-neutral-400 dark:text-neutral-400">
              Add some delicious items to get started
            </p>
          </div>
        )}

        {/* Items */}
        <div className="space-y-4">
          {cartItems.map((item) => (
            <ItemList
              key={item.name}
              items={item}
              showAddButton={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
