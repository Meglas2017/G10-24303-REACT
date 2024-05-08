import { useParams } from "react-router-dom"



export const Item = () =>{
    const {product_id} = useParams()
    console.log(product_id);
    return(
        <section className="container__item">
            <picture>
                <img className="itemImg" src="/img/star-wars/baby-yoda-1.webp" alt="Grogu" />
            </picture>
            <article className="container__article">
                <p className="container__p1">Star Wars</p>
                <h3 className="container__h3">Baby Yoda</h3>
                <p className="container__p2">Grogu</p>
                <p className="container__p3">2000</p>
            </article>
        </section>
    )
}