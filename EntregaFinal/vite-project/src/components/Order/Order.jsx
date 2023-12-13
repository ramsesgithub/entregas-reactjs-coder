import { useContext, useEffect } from "react";
import {Link} from "react-router-dom"
import { FirebaseContext, OrderDetail } from "../../index";
import "./Order.css"
import "../ItemDetail/ItemDetail.css"

export const Order = () => {
  const { orders, getOrderDB } = useContext(FirebaseContext)

  useEffect(() => {
    getOrderDB();
  }, []);

  
  return (
    <main>
      <h2 className="h2">Ordenes</h2>
      <div className="ordenes">
       <OrderDetail orders={orders}/>
      </div>
      <Link to={"/"} >
        <button className="volver">volver</button>
      </Link>
    </main>
  )
}
