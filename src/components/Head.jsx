import React, { useContext, useState } from 'react'
import logo from "../assets/logo.webp"
import { Link, Outlet } from 'react-router-dom'
import { visiblity } from '../context/contextApi'

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
  const {visible , setvisible} = useContext(visiblity)

  function handleVisiblity(){
    setvisible(prev => !prev)
  }
  
  return (
    <div className='relative w-full '>
    
       <div className='w-full '>
            <div  onClick={handleVisiblity}  className={ "w-full bg-black/50 z-30 h-full absolute " +  (visible ? "visible " : "  invisible") }>
                <div className={
                        " bg-white  w-[40%] h-full p-5 z-40 absolute duration-500 " + (visible ? "left-0" : "-left-[100%]")  }>
                    <p onClick={handleVisiblity} className='text-white bg-black p-5 w-[10%]'>cut</p>
                </div>
                    
            </div>
       </div>
       
    
      

      <div className='w-full z-20 top-0 shadow-md h-20 flex justify-center items-center '>

      <div className=' flex justify-between'>
        <div className='flex items-center mr-64'>
          <Link to={"/"}>
          <img className='w-16' src={logo} alt="logo" />
          </Link> 
          <p className='font-bold border-b-2 border-black ml-7 mr-4'>other</p>
          <i className="fi fi-rr-angle-small-down text-2xl mt-4 text-orange-500 " onClick={handleVisiblity}></i>
        </div>

        <div className='flex gap-8 items-center '>
          {navItems.map((item, i) => (
            <div
              key={i}
              className='flex gap-2'>
              <i className={" text-xl fi fi" + item.image}></i>
              <p className='font-medium'>{item.name}</p>
            </div>
          ))}
        </div>

      </div>

      </div><Outlet />
    </div>
  )
}

export default Head