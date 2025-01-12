import { Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Head from "./components/Head"
import RestaurantMenu from "./components/RestaurantMenu"
import { visiblity , coordinates , cartContext} from "./context/contextApi"
import { useEffect, useState } from "react"
import Cart from "./components/Cart"

function App() {  
  const [visible , setvisible] =useState(false)
  const [cord , setcord] =useState({ lat: 28.5355161, lng: 77.3910265 })
  const [cartData , setCartData ] =useState([])
  
  function getDataFromLocalStorage(){
    let data = JSON.parse(localStorage.getItem('cartData')) || []
    setCartData(data)
  }

  useEffect(()=>{
    getDataFromLocalStorage()
  },[])
  
  return (
    <cartContext.Provider value={{cartData , setCartData}}>
    <coordinates.Provider value={{cord , setcord}}>
    <visiblity.Provider value={{visible ,setvisible}}>
        <div className={(visible ? "max-h-screen overflow-hidden" : "")}>
          <Routes>
            <Route path="/" element={<Head/>}>
            <Route path="/" element={<Body/>}></Route>
            <Route path="/restaurantMenu/:id" element={<RestaurantMenu/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<h1>coming soon ....</h1>} />
            </Route>
      
            </Routes>
        </div>
  </visiblity.Provider>
  </coordinates.Provider>
  </cartContext.Provider>
  )
}

export default App
