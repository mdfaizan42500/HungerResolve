import React from "react";
import RestaurantCard from "./RestaurantCard";

function OnlineFoodDelivery({data}) {
    // console.log(data);
    
  return (
    <div>
        <h2 className="text-2xl font-semibold mt-5 mb-5">Restaurant with online food delivery</h2>
        <div className="grid grid-cols-4 gap-5">
        {data.map(({info , cta : {link}}) =>(
                        <div className='hover:scale-95 duration-200 '
                            key={info.id}>
                               <RestaurantCard {...info} link={link}/>      
                        </div>
                       
                    ))}
        </div>
      
    </div>
  );
}

export default OnlineFoodDelivery;
