
import { useEffect, useState } from "react"
import { CartProduct } from "../components/CartProduct"
import { bd } from "../utils/firebase"
import { doc,getDoc } from "@firebase/firestore";

//Constantes para prueba de consulta de carrito
const cartId = "d0UVciDirpO8LKAQX4p0"
//---------------------------------------------

export const Cart = () => {
    const [items, setItems] = useState()
    const [product, setProduct] = useState([])
    // const precioSubtotal = parseInt(product.product_price) + parseInt(product.quantity)
    const q = doc(bd, 'cart', cartId)
    useEffect(()=> {
        const traerCart = async () => {
            try {
                const cartProducts = await getDoc(q)
                // console.log(typeof(cartProducts),cartProducts.data());
                const logi = cartProducts.data()
                console.log(typeof(logi.cart_products));
                setProduct(await JSON.parse(logi.cart_products))
            } catch (error) {
                console.log(error);
            }
        }
        traerCart()

    },[])

    const handleChangeCantidad = (id, event) => {
        const nuevaCantidad = parseInt(event.target.value);
        if (!isNaN(nuevaCantidad)) {
            setProduct(prevProductos =>
            prevProductos.map(producto =>
              producto.id === id ? { ...producto, cantidad: nuevaCantidad } : producto
            )
          );
        }
      };

      useEffect(() => {
        const intervalId = setTimeout(() => {
          // Aquí guardas los productos en la base de datos cada segundo
          // Por ejemplo, llamar a una función para guardar los productos en Firestore
          console.log('Guardando productos en la base de datos...', product);
        }, 1000);
      
        return () => clearInterval(intervalId); // Limpiar el intervalo en el desmontaje o antes de que se ejecute el efecto nuevamente
      }, [product]);

    return(

        <main className="container__main">
            <div className="encabezado">
                <h2 className="container__main__h2 subrayadoRojo">Carrito de compras</h2>
            </div>
            <section className="container__carrito__section">
                <div>
                    <h5>DETALLE DE PRODUCTO</h5>
                </div>
                <div>
                    <h5>CANTIDAD</h5>
                </div>
                <div>
                    <h5>TOTAL</h5>
                </div>
            </section>
            <section className="container__carrito__section2">

            {product && product.map((producto, index) => (
                    <CartProduct key={producto.id} producto={producto} onChanges={handleChangeCantidad}/>
                ))}

                
                
            </section>
            <section className="container__carrito__section3">
                <h2 className="container__main__h2 subrayadoRojo">RESUMEN</h2>
                <div className="container__carrito__resumen">
                    <div className="container__carrito__resumen__div">
                        <p className="container__carrito__resumen__p">CANTIDAD DE ELEMENTOS</p>
                        <p className="container__carrito__resumen__precio">3</p>
                    </div>
                    <div className="container__carrito__resumen__div">
                        <p className="container__carrito__resumen__p">SUBTOTAL</p>
                        <p className="container__carrito__resumen__precio">$ 5.399,97</p>
                    </div>
                    <div className="container__carrito__resumen__div">
                        <p className="container__carrito__resumen__p">ENVIO</p>
                        <p className="container__carrito__resumen__precio">$ 0,00</p>
                    </div>
                    <div className="div__total">
                        <p className="container__carrito__resumen__p total">TOTAL</p>
                        <p className="container__carrito__resumen__precio total">$ 5.399,97</p>
                    </div>
                </div>

                <button>IR A PAGAR</button>
            </section>
        </main>
    )
}