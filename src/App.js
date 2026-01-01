import { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./companent/Header";
import resList from "./utils/mockdata";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import About from "./companent/Contact";
import Error from "./companent/Error";
import BodyWrapper from "./companent/BodyWrapper";
import RestaurantMenu from "./companent/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./companent/Cart.js";

const AppLayout = () => {
  const [allRestaurants] = useState(resList);
  const [filteredRestaurants, setFilteredRestaurants] = useState(resList);
  const [showTopRated, setShowTopRated] = useState(false);

  const handleSearch = (searchText) => {
    const filtered = allRestaurants.filter((restaurant) =>
      restaurant.resName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
  if (showTopRated) {
    setFilteredRestaurants(allRestaurants);
  } else {
    const topRated = allRestaurants.filter(
      (res) => parseFloat(res.rating) >= 4.0
    );
    setFilteredRestaurants(topRated);
  }

  setShowTopRated(!showTopRated);
};

  return (
    <Provider store={appStore}>
    <div className="app min-h-screen bg-cover bg-fixed">
      <Header onSearch={handleSearch} />
      <Outlet
        context={{
          filteredRestaurants,
          handleTopRated,
        }}
      />
    </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />}>

        <Route
          index
          element={<BodyWrapper />}
        />

        <Route path="/contact" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants/:id" element={<RestaurantMenu />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
