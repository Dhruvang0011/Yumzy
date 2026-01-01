import { useOutletContext } from "react-router-dom";
import Body from "./Body";

const BodyWrapper = () => {
  const { filteredRestaurants, handleTopRated } = useOutletContext();

  return (
    <Body
      listOfRestaurants={filteredRestaurants}
      onTopRated={handleTopRated}
    />
  );
};

export default BodyWrapper;
