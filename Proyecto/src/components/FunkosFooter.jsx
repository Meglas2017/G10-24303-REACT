

export const FunkosFooter = () => {

    return (
        <footer className="footer">
            <nav className="navbar container">
                <ul className="navbar__item">
                    <li className="navbar__item">
                        <a className="navbar__link" href="/shop">SHOP</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="/auth/register">REGISTRARSE</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="/auth">LOGIN</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="/contact">CONTACTO</a>
                    </li>
                </ul>

                
                <picture className="navbar__logo">
                    <img src="./img/branding/isotype.svg" alt="Isotipo Funko" />
                </picture>
            </nav>

            <p className="footer__copy">
                    All rights reserved 2024 - Funkoshop &copy;
            </p>
        </footer>
    )
}