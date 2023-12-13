import {Link} from "react-router-dom"
import { Cont } from "../../index"
import "./ItemDetail.css"

export const ItemDetail = ({id, name, price, description, image}) => {
    return (
        <div className="item" key={id}>
            <img className="item--image" src={image} alt="" />
            <div className="item__container">
                <p className="item__container--p">{name}</p>
                <p className="item__container--p">{description}</p>
                <p className="item__container--p">${price}</p>
                <Cont name={name} id={id} price={price} image={image} />
                <Link to={"/"}>
                 <button className="item__container--btn">Volver</button>
                </Link>
            </div>
        </div>
      )
}
