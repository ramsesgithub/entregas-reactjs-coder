import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom"

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Cont.css"

export const Cont = ({id, name, price, image}) => {

    const notifySuccess = () => {
        const msg = `${name} agregado al carrito`
        toast.success(msg, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        }); 
    }

    const { addItem} = useContext(CartContext)
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);

    const decrement = () => {
        if(count >= 1) setCount(count - 1);
    }
 
  return (
    <div className="item__container__cart">
        <button onClick={increment} className="item__container__cart--btn">+</button>
        <h3>{count}</h3>
        <button onClick={decrement} className="item__container__cart--btn">-</button>
        <button onClick={() => {
            if(count){
                addItem( {id, name, price, image}, count )
                notifySuccess()
            } 
        }} className="item__container__cart--btn">Agregar al carrito</button>
        <Link to="/cart">
            <button className="item__container__cart--btn">Terminar compra</button>
        </Link>
        <ToastContainer/>
    </div>)

}