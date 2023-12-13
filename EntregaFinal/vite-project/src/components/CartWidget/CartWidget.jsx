import { useContext } from "react";
import "../Navbar/NavBar.css"
import { CartContext } from "../../context/CartContext";
export const CartWidget = () => {
  const { totalQuantity } = useContext( CartContext);
    return (
        <h2 className="navbar--carrito">🛒<span className="navbar--cant">{totalQuantity}</span></h2>
    )
}