import { useContext, useEffect } from "react"
import { Form, CartContext, db, Order, FirebaseContext } from "../../index";
import "./cart.css"
//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


export const Cart = () => {
  const { cartItems, totalCartItems, removeItem } = useContext( CartContext);


  const notifyDelete = (name) => {
    const msg = `${name} elimando del carrito`
    toast.success(msg, {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  
  

  return (
    <main>
      <div className="order">
        <Link to={"/cart/order"}>
         <button className="order--btn">Ver ordenes</button>
        </Link>
      </div>
      <div className="cart">
        {cartItems.map(item => (
          <div className="cart-container" key={item.id}>
            <p>{item.name}</p>
            <img className="cart-container--img" src={item.image} alt="" />
            <p>Precio: {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Sub Total: {item.subTotal}</p>
            <button className="cart-container--btn" onClick={() =>{
              notifyDelete(item.name)
              removeItem(item.id)
            }}>Eliminar</button>
          </div>
        ))}
      </div>
      <p className="p">Suma Total del carrito: ${totalCartItems}</p>
      <ToastContainer/>
      {totalCartItems ? <Form/> : console.log("NO HAY PRODUCTOS")}
    </main>
  )
}
