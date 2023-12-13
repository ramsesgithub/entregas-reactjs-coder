import { Link } from "react-router-dom"
import "./Item.css"
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"

export const Item = ({id, name, image, price}) => {
    return (
      <div className="items__container">
        <Link to={`/item/${id}`}>
            <img className="items__container--img" src={image} alt="" />
            <p className="items__container--p">Nombre: {name} </p>
            <p className="items__container--p">Precio: ${price} </p>
        </Link>
      </div>
    )
  }
  