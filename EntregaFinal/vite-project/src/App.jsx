import {BrowserRouter, Routes, Route} from "react-router-dom"
import { NavBar, ItemDetailContainer, ItemListContainer, Cart, CartContextProvider, FirebaseContextProvider, Order } from "./index.js"


export const App = () =>{
  return (
    <>
    <BrowserRouter>
      <FirebaseContextProvider>
        <CartContextProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/cart/order" element={<Order/>}/>
          </Routes>
        </CartContextProvider>
      </FirebaseContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
