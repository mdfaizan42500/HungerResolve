import React ,{useState , useEffect} from 'react'
import RestaurantCard from "./RestaurantCard"

function TopRestaurants({data}) {
 
  
     const [value , setValue] = useState(0)


    //    const [data ,setData] = useState([])
            //  async function fetchData() {
            //      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            //      const result = await data.json();
            //     //  console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
            //     //     restaurants);
            //      setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.
            //         restaurants)
                 
            //  }
             
            //  useEffect(()=>{
            //      fetchData()
            //  },[])
    
 
    //  console.log(value);
     function handleNext(){
        value <= 479 ?  setValue((prev) => prev + 40) : ""
        // setValue((prev) => prev + 40) 
         
     }
     function handlePrev(){
        value == 0 ? "" : setValue((prev) => prev - 40)
     }
   return (
     <>
     <div className='flex justify-between mt-8 '>
                 <h1 className='font-bold text-3xl'>Famous</h1>
                 <div className='flex gap-2'>
                     <div onClick={handlePrev} className={` rounded-full h-6 w-6 cursor-pointer flex justify-center items-center `+(value == 0 ? "bg-gray-100" : "bg-gray-300")} >
                     <i className={`fi fi-rr-arrow-small-left mt-1` + (value <= 0 ? "text-gray-300" : "text-gray-800")} ></i>
                     </div>
                     <div onClick={handleNext} className={` rounded-full h-6 w-6 cursor-pointer flex justify-center items-center `+(value >= 162 ? "bg-gray-100" : "bg-gray-300")}>
                     <i className={`fi fi-rr-arrow-small-right mt-1` + (value >= 479 ? "text-gray-300" : "text-gray-800")}></i>
                     </div>
                 </div>
             </div>
             {/* <div
                 style={{translate : `-${value}%` }}
                 className='flex mt-3 duration-500'>
                 {data.map((item) =>(     
                 <img className='w-36  '
                     key={item.id}
                     src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt="" />
                     ))}
             </div> */}

                <div 
                  style={{translate: `-${value}%`}}
                  className='flex  gap-6 mt-6 w-full duration-200' >
                    
                    {data.map(({info}) =>(
                        <div className='hover:scale-95 duration-200 '
                            key={info.id}>
                               <RestaurantCard {...info}/>      
                        </div>
                       
                    ))}
                </div>

             </>
             
   )
}

export default TopRestaurants