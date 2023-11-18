import { Link } from "react-router-dom"
import "./Item.css"

export const Item = ({id, name, image, price}) => {
    return (
      <div className="items__container">
          <p className="items__container--p">Nombre: {name} </p>
          <p className="items__container--p">Precio: ${price} </p>
          <img className="items__container--img" src={image} alt="" />
          <Link to={`/item/${id}`}>
            <button className="items__container--btn">Detalle</button>
          </Link>
      </div>
    )
  }
  