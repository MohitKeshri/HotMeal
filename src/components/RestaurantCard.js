import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData.info.sla;
  return (
    <div className="m-6 p-5 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className=" rounded-lg "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
