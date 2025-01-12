/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { act, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { cartContext, coordinates } from '../context/contextApi';


let veg =
    "https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png";
let nonVeg =
    "https://www.kindpng.com/picc/m/151-1515155_veg-icon-png-non-veg-symbol-png-transparent.png";
function RestaurantMenu() {
  const {id} = useParams()
  // console.log(id?.split("rest").at(1));
  const [value , setValue] = useState(0)
  let mainId = id?.split("rest").at(1)
  const [menuName , setMenuName] = useState([])
  const [resInfo , setResInfo] = useState([])
  const [discountData , setDiscountData] = useState([])
  const [topPicksData, setTopPicksData] = useState({})
  const [menuData , setMenuData] = useState([])
  const [currIdx , setCurrIdx] = useState(null)
  const {cord : {lat , lng}} = useContext(coordinates)
 
  

async function fetchMenu(){
  const data = await fetch(`https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`)
  const res = await data.json()
  // console.log(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  setMenuName(res?.data?.cards[0]?.card?.card?.text)
  setResInfo(res?.data?.cards[2]?.card?.card?.info)
  setDiscountData(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
  let actualMenu = (res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter((data) => data.card?.card?.itemCards || data.card?.card?.categories)
  
  
 setMenuData(actualMenu)
 setTopPicksData((res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter((data)=>data?.card?.card?.title == "Top Picks")[0])
  // console.log(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
}

  useEffect(()=> {
    fetchMenu()
  },[])

  function handleNext(){
    value <= 162 ?  setValue((prev) => prev + 20) : ""
     
     
 }
 function handlePrev(){
    value == 0 ? "" : setValue((prev) => prev - 20)
 }

 function toggle(i){
  setCurrIdx(i === currIdx ? null : i)
  
 }

  return (
    
    // <div>RestaurantMenu  --- {mainId} {menuName}</div>
    <div className='w-full'>
      <div className='w-[800px] mx-auto pt-[10px]'>
            <p className='text-sm text-slate-500'><Link to={"/"}><span className='hover:text-slate-700 cursor-pointer'>Home</span> </Link>/ <Link to={"/"}><span className='hover:text-slate-700 cursor-pointer'>{resInfo?.city}</span> </Link> / <span className=' text-slate-700'>{resInfo?.name}</span></p>
            <h1 className='pt-6 font-bold text-2xl'>{resInfo.name}</h1>
            <div className='w-full border border-black h-[200px] rounded-[30px] bg-gradient-to-t from-slate-300 p-5'>
              <div className='w-full h-full border-slate-200/70 bg-white p-4 rounded-[30px]'>
                  <div className='flex gap-1 font-semibold'>
                    <i className="text-green-700 fi fi-sr-circle-star"></i>
                    <p>{resInfo?.avgRating} </p>
                    <span>{resInfo?.totalRatingsString}</span>
                    .
                    <span>{resInfo?.costForTwoMessage}</span>
                  </div>
                  <p className='underline text-orange-600 font-bold'>{resInfo?.cuisines?.join(",")}</p>
                  <div className="flex gap-2 mt-2">
                                    <div className="w-[9px] flex flex-col justify-center items-center">
                                        <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                                        <div className="w-[1px] h-[25px] bg-gray-500 "></div>
                                        <div className="w-[7px] h-[7px] bg-gray-500 rounded-full"></div>
                                    </div>
                                    <div className="flex flex-col gap-1 text-sm font-semibold">
                                        <p>
                                            Outlet{" "}
                                            <span className="text-gray-500 font-normal">
                                                {resInfo.locality}
                                            </span>
                                        </p>
                                        <p>{resInfo.sla?.slaString}</p>
                                    </div>
                   </div>                
              </div>
              <hr />

              <div className=" w-full">
                  <div className="flex items-center p-3">
                      {resInfo.length !== 0 && resInfo?.expectationNotifiers ? (
                          <>
                              <img className="w-6"
                                 src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/" +  resInfo.feeDetails?.icon}
                                  alt=""/>

                              <span className="text-sm ml-4 text-gray-500 font-normal">
                                 {resInfo?.expectationNotifiers[0]?.enrichedText.replace(/<[^>]*>/g,"")}
                              </span>
                          </>) : ("")}
                  </div>
              </div>
              
            </div>
            <div className='w-full overflow-hidden'>
                <div className='flex justify-between mt-8 '>
                                <h1 className='font-bold text-xl'>Deals for You</h1>
                                <div className='flex gap-2'>
                                    <div onClick={handlePrev} className={` rounded-full h-6 w-6 cursor-pointer flex justify-center items-center `+(value == 0 ? "bg-gray-100" : "bg-gray-300")} >
                                    <i className={`fi fi-rr-arrow-small-left mt-1` + (value <= 0 ? "text-gray-300" : "text-gray-800")} ></i>
                                    </div>
                                    <div onClick={handleNext} className={` rounded-full h-6 w-6 cursor-pointer flex justify-center items-center `+(value >= 162 ? "bg-gray-100" : "bg-gray-300")}>
                                    <i className={`fi fi-rr-arrow-small-right mt-1` + (value >= 162 ? "text-gray-300" : "text-gray-800")}></i>
                                    </div>
                                </div>
                  </div> 
                  <div 
                    style={{translate : `-${value}%`}}
                  className={`flex gap-6  duration-500`}>
                    {
                    discountData.map((data ,i)=>(
                      <Discount data={data} key={i}/>
                    ))
                  }
                  </div>
                  <h2 className="text-center mt-10">MENU</h2>
                  <div className="w-full  mt-5 relative cursor-pointer">
                        <div className="w-full p-3 rounded-xl font-semibold text-lg bg-slate-200 text-center ">
                            Search for dishes
                        </div>
                        <i className={"fi fi-rr-search absolute top-3 right-4"}></i>
                  </div>
                  <div>
                    <p>top picks</p>
                    {
                      menuData.map(({card : {card }})=>( 
                        <MenuCard card={card} resInfo={resInfo}/>
                      ))
                    }
                  </div>
                  
            </div>
            
      </div>
    </div> 
  )
}



function MenuCard({card} , resInfo){
  const {itemCards,title} = card;

  let hello = false
  if(card["@type"]){
    hello = true
  }
 
 const [isOpen , setIsOpen] = useState(hello)

  function ToggleDropdown(){
    setIsOpen((prev) => !prev)
  }

  if(card.itemCards) {
     return (
      <>
  <div className='m-3'>
    <div className='flex justify-between'>
       <h1 className={'font-bold text-'+ (card["@type"] ? "xl" : "base")}>{title} </h1>
       <i className={"fi text-xl fi-rr-angle-small-" + (isOpen ? "up" : "down")} onClick={ToggleDropdown}></i>
    </div>
    {isOpen && <DetailMenu itemCards={itemCards} resInfo={resInfo}/>}
    
  </div>
  <hr className={"my-4 border-"+(card["@type"] ? "[7px]" : "[5px]")}></hr>
  </>
  )
  } else {
    const {categories , title} = card;
    return (
      
      <div>
        <h1 className='font-bold text-xl'>{title}</h1>
        {categories.map((data)=>(
          <MenuCard card={data} resInfo={resInfo}/>
        ))}

      </div>
    )
  }

 
}

function DetailMenu({itemCards} , resInfo){
  return(
    <>
    <div className='my-5'>
      {itemCards.map(({ card : {info} }) => (
        <DetailMenuCard info={info} resInfo={resInfo}/>
      ))}
    </div>
    <hr className="my-5 " />
    </>
    
  )
}
function DetailMenuCard({info } , resInfo) {
  const { name, defaultPrice, price, itemAttribute: { vegClassifier }, ratings: { aggregatedRating: { ratingCountV2, rating } }, imageId, description } = info
  const [ismore , setIsmore] = useState(false)
  const {cartData , setCartData } = useContext(cartContext)
  let trimDes = description.substring(0,130) + "..."
  function addToCart(){
    const isAdded = cartData.find((data) => data.id === info.id)
    let resInfoFromLocatStorage = JSON.parse(localStorage.getItem("resInfo")) || []
    if(!isAdded) {
      if(resInfoFromLocatStorage.name === resInfo.name || resInfoFromLocatStorage.length === 0) {
         setCartData((prev) => [...prev , info]) 
      localStorage.setItem("cartData", JSON.stringify([...cartData , info ]))
      localStorage.setItem("resInfo", JSON.stringify(resInfo))
      }else{
        alert("Same item of different restaurant")
      }
     
    } else {
      alert("Item already added to cart")
    }
    
    
  }
  return (
  <>
    <div className='w-full flex justify-between  min-h-[182px]'>
      <div className='w-[70%]'>
        <img className="w-5 rounded-sm" src={vegClassifier == "VEG" ? veg : nonVeg} alt="" srcSet="" />
        <h2 className="font-bold text-lg">{name}</h2>
        <p className="font-bold text-lg">
          ₹{defaultPrice / 100 || price / 100}{" "}
        </p>
        <div className="flex items-center gap-1"> <i className={"fi mt-1 text-xl fi-ss-star"}></i> <span>  {rating} ({ratingCountV2})  </span> </div>
        {description.length > 140 ? <div>
              <span className=''>{ismore ? description : trimDes}</span>
              <button className='font-bold'onClick={()=>setIsmore(!ismore)}>{ismore ? "less" : "more"}</button>
          </div>  : <span className=''>{description}</span>}
      </div>
      <div className='w-[20%] relative'>
        <img className="rounded-xl aspect-square" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + imageId} alt="" />
        <button className='bg-white absolute bottom-[25px] rounded-xl px-4 py-1 ml-9 text-lg text-green-700' onClick={addToCart}>Add</button>
      </div>
    </div>
  </>

)}

function Discount({data : {info : {couponCode,header,offerLogo}}} , id){

  
  return(
    <div className='flex min-w-[328px] h-[76px] border rounded-2xl p-3 gap-2'
    key={id}>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" + offerLogo} alt="" />
        <div>
          <h2 className='text-center font-semibold text-xl'>{header}</h2>
          <p className='text-gray-500'>{couponCode}</p>
        </div>
    </div>
  )
}

export default RestaurantMenu
