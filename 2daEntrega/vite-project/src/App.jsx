import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavBar, ItemDetailContainer, ItemListContainer, Cart } from "./index.js"


export const App = () =>{
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:category" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
