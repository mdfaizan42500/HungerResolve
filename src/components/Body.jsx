import React, { useContext, useEffect, useState } from 'react'
import Trending from './Trending'
import TopRestaurants from './TopRestaurants'
import OnlineFoodDelivery from './OnlineFoodDelivery'
import { coordinates } from '../context/contextApi'



function Body() {
    const [topResdata, setTopResData] = useState([])
    const [trending , setTrending] = useState([])
    const [topRes , setTopRes] = useState("")
    const [OnlineFood , setOnlineFood] = useState("")
    const [data , setData] = useState({})
    const {cord : {lat , lng}} = useContext(coordinates)

    async function fetchData() {
                    const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);
                    const result = await data.json();

                    setTopRes(result?.data?.cards[1]?.card?.card?.header?.title)
                    setOnlineFood(result?.data?.cards[2]?.card?.card?.title)
                    setTopResData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
                       restaurants)
                    setTrending(result?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
                    setData(result.data)

                }
                
                useEffect(()=>{
                    fetchData()
                },[lat , lng])
   
                if (data.communication || data.tid == "") {
                    return (
                        <div className="flex mt-64 overflow-hidden justify-center items-center flex-col">
                            <img
                                className="w-72"
                                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"
                                alt=""
                            />
                            <h1>Location unservicalbe</h1>
                        </div>
                    );
                }
  return (
    <div className='w-full'>
        <div className='w-[80%] mx-auto  mt-5 overflow-hidden' >
            <Trending data={trending}/>
            
            <TopRestaurants data={topResdata} title={topRes}/>
            
            <OnlineFoodDelivery data={topResdata} title={OnlineFood}/>
        </div>
            
    </div>
  )
}

export default Body