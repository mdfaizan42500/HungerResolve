import React, { useContext, useState } from 'react'
import logo from "../assets/logo.webp"
import { Link, Outlet } from 'react-router-dom'
import { cartContext, coordinates, visiblity } from '../context/contextApi'

function Head() {
  const navItems = [
    {
       name : "HR corporate",
      image: "-sr-briefcase", 
      path : "/hrcorporations"
    },
    { 
                
      name: "Search" ,
      image: "-rr-search", 
      path : "/Search"
    },
    {
      name: "Offers" ,
      image: "-sr-badge-percent", 
      path : "/Offers"
    },
    {
      name: "Help" ,
      image: "-rr-interrogation", 
      path : "/Help"
    },
    {
      name: "sign in" ,
      image: "-rr-user", 
      path : "/sign in"
    },
    {
      name: "Cart" ,
      image:"-sr-shopping-cart", 
      path : "/Cart"
    }
    
  ]
  const {visible , setvisible} = useContext(visiblity)
  const [searchData , setSearchData] = useState([])
  const [address , setAddress] = useState("")
  const {setcord} = useContext(coordinates)
  const {cartData , setCartData} = useContext(cartContext)
    
    
  function handleVisiblity(){
    setvisible(prev => !prev)
  }

 async function SearchResultFun(value){
 
        if(value === "") return 
        let data = await fetch(`https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/place-autocomplete?input=${value}`)
        let res = await data.json()
        setSearchData(res?.data)
        
      }

async function fetchLatLng(id){

        if(id === "") return
        let data = await fetch(`https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/address-recommend?place_id=${id}`)
        let res = await data.json()
        setcord({lat:res.data[0].geometry.location.lat, 
          lng:res.data[0].geometry.location.lng})
          setAddress(res.data[0].formatted_address)
          handleVisiblity()
    
      }
  
  return (
    <div className='relative w-full '>
    
       <div className='w-full '>
            <div className={ "w-full bg-black/50 z-30 h-full absolute " +  (visible ? "visible " : "  invisible") }>
                <div className={
                        " bg-white  w-[40%] h-full p-5 z-40 absolute duration-500 " + (visible ? "left-0" : "-left-[100%]")  }>
                   <div className='flex flex-col gap-4 mt-3  w-[50%] mr-6'>
                      <i className="fi fi-br-cross"
                            onClick={handleVisiblity}></i>
                        <input type="text" className='border focus:outline-none focus:shadow-lg p-5' onChange={(e)=> {SearchResultFun(e.target.value)}} />
                   
                        <div className='p-3 border'>
                            <ul>
                              {searchData.map((data,i)=>{
                                const isLast = (i === searchData.length - 1)
                                return (
                                <li onClick={()=>{fetchLatLng(data.place_id)}}>{data?.structured_formatting?.main_text} 
                                  <p className='text-sm opacity-60'>{data?.structured_formatting?.secondary_text}</p>
                                  {!isLast && <p>-----------------------------------</p>}
                                </li>
                                )
                                  })}
                            </ul>
                        </div>
                    </div>
                </div>
                    
            </div>
       </div>
       
    
      

      <div className='w-full z-20 top-0 shadow-md h-20 flex justify-center items-center '>

      <div className=' flex justify-between'>
        <div className='flex items-center mr-64'>
          <Link to={"/"}>
          <img className='w-16' src={logo} alt="logo" />
          </Link> 
          <p className='flex items-center'><span className='font-bold border-b-2 border-black ml-7 mr-4'>other</span><span className='text-sm w-[230px] opacity-60 line-clamp-1'>{address}</span></p>
          <i className="fi fi-rr-angle-small-down text-2xl mt-4 text-orange-500 " onClick={handleVisiblity}></i>
        </div>

        <div className='flex gap-8 items-center '>
          
          {navItems.map((item, i) => (
            <Link to={item.path}>
            <div
              key={i}
              className='flex gap-2'>
              <i className={" text-xl fi fi" + item.image}></i>
              <p className='font-medium'>{item.name}</p>
              {item.name === "Cart" && <p>{cartData.length}</p>}
              
            </div>
            </Link>
          ))}
        </div>

      </div>

      </div><Outlet />
    </div>
  )
}

export default Head