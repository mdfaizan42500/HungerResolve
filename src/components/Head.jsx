import React from 'react'
import logo from "../assets/logo.webp"

function Head() {
  const navItems = [
    {
       name : "HR corporate",
      image: "-sr-briefcase"
    },
    { 
                
      name: "Search" ,
      image: "-rr-search"
    },
    {
      name: "Offers" ,
      image: "-sr-badge-percent"
    },
    {
      name: "Help" ,
      image: "-rr-interrogation"
    },
    {
      name: "sign in" ,
      image: "-rr-user"
    },
    {
      name: "Cart" ,
      image:"-sr-shopping-cart"
    }
    
  ]
  
  return (
    <div className='w-full shadow-md h-20 flex justify-center items-center '>
        
        <div className=' flex justify-between'>
            <div className='flex items-center mr-64'>
                <img className='w-16' src={logo} alt="logo"  />
                <p className='font-bold border-b-2 border-black ml-7 mr-4'>other</p>
                <i className="fi fi-rr-angle-small-down text-2xl mt-4 text-orange-500 "></i>
            </div>

            <div className='flex gap-8 items-center '>
              {navItems.map((item , i)=>(
                <div
                key={i}
                className='flex gap-2'>
                <i className={" text-xl fi fi"+ item.image}></i>
                <p className='font-medium'>{item.name}</p>
                </div>
              ))} 
            </div>

     </div>

    </div>
  )
}

export default Head