/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
export const FunkosCard = ({funko, id}) =>{
    return (
        <article>
            <Link to={{ pathname:`/shop/item/${id}`, state: { funko } }}>
                <picture>
                    <img className="container__pr__img" src={"."+funko.img_front} alt={funko.product_name} />
                </picture>
                <article className="container__pr__article">
                    <p className="container__pr__p1__shop">{funko.licence_name}</p>
                    <h3 className="container__pr__h3__shop">{funko.product_name}</h3>
                    <p className="container__pr__p2">$ {funko.product_price}</p>
                    <p className="container__pr__p3">3 CUOTAS SIN INTERES</p>  
                </article>
                
            </Link>
        </article>
    )
}