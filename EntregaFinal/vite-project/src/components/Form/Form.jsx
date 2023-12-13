import { useContext, useState } from "react"
import "./Form.css"
import { CartContext, FirebaseContext } from "../../index"
//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Form = () => {

  const {addOrderDB} = useContext(FirebaseContext);
  const {cartItems, totalCartItems, clearCartItems} = useContext(CartContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = e => {
    e.preventDefault();
    addOrderDB(cartItems, {name, email}, totalCartItems);

    setName("");
    setEmail("");
    clearCartItems()
  }



  return (
    <form onSubmit={handleForm} className="form">
      <div className="form__div">
        <label htmlFor="">Nombre</label>
        <input onChange={(e) => setName(e.target.value)} className="form__div--input"  type="text" />
      </div>
      <div className="form__div">
        <label htmlFor="">Email</label>
        <input onChange={(e) => setEmail(e.target.value)} className="form__div--input" type="email" />
      </div>
      <button type="submit" className="form--btn">Comprar</button>
    </form>
  )
}
