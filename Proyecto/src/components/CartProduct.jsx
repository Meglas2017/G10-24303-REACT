/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { bd } from "../utils/firebase"
import { doc,getDoc } from "@firebase/firestore";
import { useEffect, useState } from "react";





export const CartProduct = ({producto, onChanges}) => {
    const [data, setData] = useState()
    const [productQuantity, setproductQuantity] = useState(producto.cantidad)
    const productId = producto.id
    const q = doc(bd, 'funkos', productId)
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

    const addQuantity = (e) => {
        setproductQuantity(e.target.value)
    }


    return(
        <>
        {data? 
            <article className="container__carrito__article">
                <Link className="container__carrito__a" to={""}>
                    <picture>
                        <img src={"."+data.img_front} alt={data.product_description} />
                    </picture>
                    <div className="container__carrito__div">
                        <h4>{data.product_name}</h4>
                        <p>{data.licence_name}</p>
                        <p>Precio unitario: $ {data.product_price}</p>
                    </div>
                </Link>
                <form className="container__carrito__form" action="">
                    <input type="text" value={producto.cantidad} onChange={(e) => onChanges(producto.id, e)} name="amount" id="quantity" />
                    <div className="container__carrito__div2">
                            <button id="add" type="button" className="container__carrito__button" onClick={addQuantity}>+</button>
                            <button id="subtract" type="button" className="container__carrito__button">-</button>
                    </div>
                </form>
                <p className="container__carrito__precio">{data.product_price}</p>
                <Link className="container__carrito__a" to={""}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                        <path
                            d="M19.0635 11.5226C19.1755 11.4181 19.2659 11.2925 19.3295 11.1531C19.393 11.0137 19.4285 10.8631 19.4339 10.71C19.4392 10.5569 19.4144 10.4042 19.3607 10.2606C19.3071 10.1171 19.2257 9.98556 19.1212 9.87349C19.0167 9.76142 18.8912 9.67103 18.7518 9.60747C18.6123 9.54391 18.4618 9.50844 18.3086 9.50308C18.1555 9.49772 18.0028 9.52257 17.8593 9.57622C17.7158 9.62986 17.5842 9.71125 17.4721 9.81574L14.0585 12.9984L10.8758 9.58357C10.6628 9.36546 10.373 9.23936 10.0682 9.23225C9.76348 9.22514 9.46805 9.3376 9.24516 9.54555C9.02226 9.7535 8.88962 10.0404 8.8756 10.3449C8.86157 10.6494 8.96729 10.9474 9.17013 11.1749L12.3528 14.5886L8.93797 17.7712C8.82194 17.8747 8.72774 18.0002 8.66092 18.1406C8.5941 18.2809 8.55599 18.4332 8.54884 18.5885C8.54169 18.7437 8.56564 18.8989 8.61929 19.0448C8.67293 19.1907 8.75519 19.3244 8.86122 19.438C8.96726 19.5517 9.09493 19.643 9.23675 19.7066C9.37858 19.7702 9.53168 19.8049 9.68707 19.8085C9.84247 19.8121 9.99702 19.7846 10.1417 19.7277C10.2863 19.6708 10.4181 19.5855 10.5293 19.4769L13.943 16.2954L17.1256 19.7091C17.2284 19.8272 17.3539 19.9235 17.4947 19.9922C17.6354 20.0608 17.7886 20.1004 17.945 20.1086C18.1014 20.1168 18.2578 20.0934 18.405 20.0398C18.5521 19.9863 18.687 19.9036 18.8015 19.7969C18.9161 19.6901 19.008 19.5613 19.0717 19.4183C19.1354 19.2752 19.1697 19.1208 19.1725 18.9642C19.1752 18.8076 19.1465 18.6521 19.0879 18.5069C19.0292 18.3616 18.942 18.2297 18.8313 18.1189L15.6498 14.7052L19.0635 11.5226Z"
                            fill="#F24E1E" />
                        <path fillRule="evenodd" clipRule="evenodd"
                            d="M1.16675 14.6469C1.16675 7.55943 6.91258 1.8136 14.0001 1.8136C21.0876 1.8136 26.8334 7.55943 26.8334 14.6469C26.8334 21.7344 21.0876 27.4803 14.0001 27.4803C6.91258 27.4803 1.16675 21.7344 1.16675 14.6469ZM14.0001 25.1469C12.6212 25.1469 11.2558 24.8753 9.9819 24.3477C8.70799 23.82 7.55048 23.0466 6.57546 22.0716C5.60044 21.0965 4.82702 19.939 4.29935 18.6651C3.77167 17.3912 3.50008 16.0258 3.50008 14.6469C3.50008 13.2681 3.77167 11.9027 4.29935 10.6288C4.82702 9.35484 5.60044 8.19733 6.57546 7.22231C7.55048 6.2473 8.70799 5.47387 9.9819 4.9462C11.2558 4.41852 12.6212 4.14693 14.0001 4.14693C16.7849 4.14693 19.4556 5.25318 21.4247 7.22231C23.3938 9.19144 24.5001 11.8622 24.5001 14.6469C24.5001 17.4317 23.3938 20.1024 21.4247 22.0716C19.4556 24.0407 16.7849 25.1469 14.0001 25.1469Z"
                            fill="#F24E1E" />
                    </svg>
                </Link>
            </article>
        :null}
        </>
    )
}