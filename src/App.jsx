import { Fragment } from "react"
import Home from "./components/Home.jsx"
import Navbar from "./components/Navbar.jsx"
import Watchlist from "./components/watchlist.jsx"
import { Route, Routes } from "react-router-dom"











function App() {
  

  return (
   <Fragment>
    <Navbar/>
    
    
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/watchlist' element={<Watchlist></Watchlist>} />
    </Routes>
    
  
  
   </Fragment>
  )
}

export default App
