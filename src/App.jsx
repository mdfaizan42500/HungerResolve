import { Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Head from "./components/Head"
import RestaurantMenu from "./components/RestaurantMenu"
import { visiblity } from "./context/contextApi"
import { useState } from "react"

function App() {  
  const [visible , setvisible] =useState(false)
  return (
    <visiblity.Provider value={{visible ,setvisible}}>
        <div className={(visible ? "max-h-screen overflow-hidden" : "")}>
          <Routes>
            <Route path="/" element={<Head/>}>
            <Route path="/" element={<Body/>}></Route>
            <Route path="/restaurantMenu/:id" element={<RestaurantMenu/>}/>
            </Route>
      
            </Routes>
        </div>
  </visiblity.Provider>
  )
}

export default App
