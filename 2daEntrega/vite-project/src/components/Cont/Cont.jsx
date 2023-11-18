import { useState } from "react";
import "./Cont.css"


export const Cont = () => {

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
        <button className="item__container__cart--btn">Agregar al carrito</button>
    </div>)

}