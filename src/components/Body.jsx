import React, { useEffect, useState } from 'react'
import Trending from './Trending'
import TopRestaurants from './TopRestaurants'



function Body() {
    // const [data ,setData] = useState([])

    // async function fetchData() {
    //     const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //     const result = await data.json();
    //    //  console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
    //    //     restaurants);
    //     setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
    //        restaurants)
        
    // }
    
    // useEffect(()=>{
    //     fetchData()
    // },[])
   
    
  return (
    <div className='w-full'>
        <div className='w-[80%] mx-auto  mt-5 overflow-hidden' >
            <Trending />
            <hr className='border mt-5 '></hr>
            <TopRestaurants />
            <hr className='border mt-5 mb-3 '></hr>
        </div>
            
    </div>
  )
}

export default Body