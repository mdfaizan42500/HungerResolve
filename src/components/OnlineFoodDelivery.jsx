import React from "react";
import RestaurantCard from "./RestaurantCard";

function OnlineFoodDelivery({data}) {
    console.log(data);
    
  return (
    <div>
        Restaurant with online food delivery
        <div className="grid grid-cols-4 gap-5">
            {data.map(({info}) =>(
                        <div className='hover:scale-95 duration-200'
                            key={info.id}>
                               <RestaurantCard {...info}/>      
                        </div>
                       
                    ))}
        </div>
      
    </div>
  );
}

export default OnlineFoodDelivery;
