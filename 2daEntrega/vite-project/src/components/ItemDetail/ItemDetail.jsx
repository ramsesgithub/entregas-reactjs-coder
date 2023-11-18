import {Link} from "react-router-dom"
import { Cont } from "../../index"
import "./ItemDetail.css"

export const ItemDetail = ({id, name, price, description, image}) => {
    return (
        <div className="item">
            <img className="item--image" src={image} alt="" />
            <div className="item__container">
                <p className="item__container--p">Nombre: {name}</p>
                <p className="item__container--p">Descripción: {description}</p>
                <p className="item__container--p">Precio: ${price}</p>
                <Cont/>
                <Link to={"/"}>
                 <button className="item__container--btn">Volver</button>
                </Link>
            </div>
        </div>
      )
}
