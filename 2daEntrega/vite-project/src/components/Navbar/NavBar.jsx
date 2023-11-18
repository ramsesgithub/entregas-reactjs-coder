import { CartWidget } from "../../index"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar__container">
                    <h1>Celucenter Shop</h1>
                    <p>The best place to do your shopping</p>
                </div>
                <ul className="navbar__li">
                    <Link to="/">
                        <li className="navbar__li--cat">Inicio</li>
                    </Link>
                    <Link to={"category/telefono"}>
                        <li className="navbar__li--cat">Teléfono</li>
                    </Link>
                    <Link to={"category/tablet"}>
                        <li className="navbar__li--cat">Tablet</li>
                    </Link>
                    <Link to={"category/notebook"}>
                        <li className="navbar__li--cat">Notebook</li>
                    </Link>
                </ul>
                <Link to="/cart">
                    <CartWidget/>
                </Link>
            </nav>
        </header>
    )
}