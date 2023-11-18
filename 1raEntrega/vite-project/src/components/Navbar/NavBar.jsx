import { CartWidget } from "./CartWidget"
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
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Sobre Nosotros</li>
                </ul>
                <CartWidget/>
            </nav>
        </header>
    )
}