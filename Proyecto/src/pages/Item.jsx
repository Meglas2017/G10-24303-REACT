import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { bd } from "../utils/firebase"
import { doc,getDoc } from "@firebase/firestore";


export const Item = () =>{
    const [data, setData] = useState()

    const {product_id} = useParams()
    console.log(product_id);
    const q = doc(bd, 'funkos', product_id)
    useEffect(()=>{
        
        const consulta = async () =>{
            try {
                const product = await getDoc(q)
                console.log(product.data());
                setData(product.data())
            } catch (error) {
                console.log(error);
            }
        }
        consulta()
    },[])



    return(
        <>
        {data ? 
            <section className="container__item">
                <picture>
                    <img className="itemImg" src={data.img_front} alt={data.product_description} />
                </picture>
                <article className="container__article">
                    <p className="container__p1">
                        {data.licence_name}
                    </p>
                    <h3 className="container__h3">
                        {data.product_name}
                    </h3>
                    <p className="container__p2">
                        {data.product_description}
                    </p>
                    <p className="container__p3">
                        {data.product_price}
                    </p>
                    <form className="container__form" action="/shop/item/<%=product.product_id%>/add" method="post">
                        <input className="container__form__input" type="text" name="quantity" id="quantity" />
                        <div className="container__div">
                            <button id="add" type="button" className="container__button">+</button>
                            <button id="subtract" type="button" className="container__button">-</button>
                        </div>
                        <button type="" className="container__button2">Agregar al Carrito</button>
                    </form>
                    <div className="container__div2">
                        <a href="">Ver métodos de pago </a>
                        <p> - </p>
                        <a href=""> 3 CUOTAS SIN INTERÉS</a>
                    </div>
                </article>
            </section>
        :null}
        </>
    )
}