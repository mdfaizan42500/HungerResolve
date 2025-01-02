import { Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Head from "./components/Head"
import RestaurantMenu from "./components/RestaurantMenu"


function App() {
  return (
    // <div>
    //   <Head/>
    //   <Body/>
    // </div>
    <Routes>
      <Route path="/" element={<Head/>}>
      <Route path="/" element={<Body/>}></Route>
      <Route path="/restaurantMenu/:id" element={<RestaurantMenu/>}/>
      </Route>
      
    </Routes>
  )
}

export default App
