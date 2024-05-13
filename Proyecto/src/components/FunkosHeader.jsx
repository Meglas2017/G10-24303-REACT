export const FunkosHeader = () => {
    return (
        <header>
            <nav className="navbar container">
                <picture className="navbar__logo">
                    <a href="./index.html">
                        <img src="../img/branding/logo_light_horizontal.svg" alt="Isologotipo Funko" />
                    </a>
                </picture>
                <ul className="navbar__menu">
                    <li className="navbar__item with-submenu">
                    <a className="navbar__link with-icon" href="./pages/shop.html">SHOP <iconify-icon icon="mdi:chevron-down"></iconify-icon></a>
                    <ul className="submenu">
                        <li className="submenu__item">
                        <a href="" className="submenu__link">Funkos</a>
                        </li>
                        <li className="submenu__item">
                        <a href="" className="submenu__link">Remeras</a>
                        </li>
                        <li className="submenu__item">
                        <a href="" className="submenu__link">Llaveros</a>
                        </li>
                    </ul>
                    </li>
                    <li className="navbar__item">
                    <a className="navbar__link" href="./pages/contact.html">CONTACTO</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="./pages/login.html">LOGIN</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__cart" href="./pages/cart.html">
                            <img src="../img/icons/cart-icon.svg" alt="Carrito" />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>)
}