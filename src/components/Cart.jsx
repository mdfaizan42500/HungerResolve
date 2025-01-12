import React, { useContext } from 'react'
import { cartContext } from '../context/contextApi'
import { data, Link } from 'react-router-dom';

function Cart() {
  const {cartData , setCartData} = useContext(cartContext)
  console.log(cartData);

  // below all three are same
  // 1.
  // let totalPrice = 0

  // cartData.forEach(item => {
  //   totalPrice += item.price /100
  // })

  // 2.
  let totalPrice = cartData.reduce((acc , currVal) => (acc + currVal.price/100 || acc + currVal.defaultPrice/100), 0)

  // 3.
  // for(let i=0; i<cartData.length; i++){
  //   totalPrice += cartData[i].price /100 || cartData.defaultPrice / 100
  // }
  
if(cartData.length <= 0) {
  return (
    <div className='flex flex-col items-center'>
      <h1>You have no items in cart</h1>
      <Link to={"/"}>
        <button className='bg-green-500'>Order from here</button>
      </Link>
       </div>
  )
}
function handleRemoveCart(i){
 if(cartData.length > 1){
  let newArr = [...cartData]
  newArr.splice(i,1)
  setCartData(newArr)
  localStorage.setItem("cartData", JSON.stringify(newArr))
 }else{ 
  clearCart()
 }  // if cart length is more than 1 remove the item from cart else clear cart
}   

function clearCart(){
  setCartData([])
  localStorage.setItem("cartData", JSON.stringify([]))
}
  return (
    <div className='w-full '>
        <div className='w-[50%] mx-auto'>
            {
              cartData.map((data , i) => (
                <div className='flex justify-between my-4 p-4 w-full  '>
                    <div className='w-[70%]'>
                    <h1 className=' text-xl'>{data.name}</h1>
                    <p>₹ {data.price/100 || data.defaultPrice/100}</p>
                    </div>
                    <div className='w-[20%] relative'>
                        <img className="rounded-xl aspect-square" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + data.imageId} alt="" />
                         <button className=' absolute bottom-0 rounded-xl px-4 py-1 ml-4 mr-4 text-lg text-white bg-red-600' onClick={()=>handleRemoveCart(i)} >Remove</button>
                </div>
          </div>
              ))
            }
            <p>Total - ₹ {totalPrice}</p>
            <button className='bg-green-700 rounded-xl p-3 mt-4' onClick={clearCart}>Clear All cart</button>
      </div>
    </div>
  )
}

export default Cart