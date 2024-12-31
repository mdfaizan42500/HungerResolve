import React from "react";

function RestaurantCard(info) {
//   console.log(info);

  return (
    <>
      <div className="min-w-[250px] h-[182px] relative">
        <img
          className="w-full h-full object-cover rounded-3xl"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            info.cloudinaryImageId
          }
          alt="image"
        />
        <div className="bg-gradient-to-t from-black from-1% to-transparent to-40%  rounded-2xl w-full h-full  absolute top-0"></div>
        <p className="absolute bottom-0 text-white text-2xl ml-2 mb-1 font-bold">
          {" "}
          {info?.aggregatedDiscountInfoV3?.header}{" "}
          {info?.aggregatedDiscountInfoV3?.subHeader}
        </p>
      </div>
      <div className="mt-3 font-semibold">
        <h2>{info?.name}</h2>
        <p>
          <i className="text-green-700 fi fi-sr-circle-star"></i>{" "}
          {info?.avgRating} <span>{info?.sla?.slaString}</span>{" "}
        </p>
        <p className="line-clamp-1 font-medium text-black/60">
          {info?.cuisines.join(",")}
        </p>
        <p className="line-clamp-1 font-medium text-black/60">
          {info?.locality}
        </p>
      </div>
    </>
  );
}
export default RestaurantCard;
