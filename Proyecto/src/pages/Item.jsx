import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { bd } from "../utils/firebase"
import { doc,getDoc } from "@firebase/firestore";




export const Item = () =>{
    const [data, setData] = useState()
    const [quantity, setQuantity] = useState(1)

    const {product_id} = useParams()
    // console.log(product_id);
    const q = doc(bd, 'funkos', product_id)
    useEffect(()=>{
        
        const consulta = async () =>{
            try {
                const product = await getDoc(q)
                // console.log(product.data());
                setData(product.data())
            } catch (error) {
                console.log(error);
            }
        }
        consulta()
    },[])

    const manejoInput = (event) =>{
        
        const valor = event.target.value
        // console.log(valor);
        let reconstruction = "";
        for (let i = 0; i < valor.length; i++) {
            const caracter = valor[i];
            const isNumber = !isNaN(caracter) && isFinite(caracter);
            if (isNumber){
                reconstruction = reconstruction + caracter;
                setQuantity (parseInt(reconstruction.trim()))
            } else {
                setQuantity (parseInt(reconstruction.trim()))
            }
        }

    }   

    const addQuantity = () =>{
        setQuantity(parseInt(quantity + 1))
    }
    const subtractQuantity = () =>{
        if (quantity > 0){
            setQuantity(parseInt(quantity - 1))
        }
    }

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
                        $ {data.product_price}
                    </p>
                    <form className="container__form" action="/shop/item/<%=product.product_id%>/add" method="post">
                        <input className="container__form__input" type="text" name="quantity" id="quantity" value={quantity}  onChange={manejoInput} />
                        <div className="container__div">
                            <button id="add" type="button" className="container__button" onClick={addQuantity}>+</button>
                            <button id="subtract" type="button" className="container__button" onClick={subtractQuantity}>-</button>
                        </div>
                        <Link to={"/cart"}>
                            <button type="" className="container__button2">Agregar al Carrito</button>
                        </Link>
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