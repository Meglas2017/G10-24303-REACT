import { useState, useEffect } from "react"
import { bd } from "../utils/firebase"
import { collection, getDocs } from "@firebase/firestore";//addDocs importar para usar modulo de creacion de BBDD
import { FunkosCard } from "./FunkosCard";
import { FunkosAside } from "./FunkosAside";

export const FunkosGrid = () => {
    const [data, setData] = useState()

    // const cargarUsuario = async (funkoss) => { // Cargo en FIREBASE la base de datos de funkos
    //     try {
    //       // Agrega un nuevo documento a la colección "users"
    //         const docRef = await addDoc(collection(bd, "funkos"), funkoss);
    //         console.log("Documento agregado con ID: ", docRef.id);
    //     } catch (error) {
    //       console.error("Error al cargar el funko:", error);
    //     }
    // };
    // misfunkos.forEach(funko => {cargarUsuario(funko)})

    useEffect(() => {
        const probando = async () => {
            try {
                const firulo = await getDocs(collection(bd, "funkos"));
                // const firulo = await backAPI("")
                const newData = firulo.docs.map(doc => doc.data()); //Mapear para obtener el nuevo array y pasarselo a la funcion setData
                setData(newData)
                console.log(newData);
                
            } catch (error) {
                console.log(error);
            }
    
        }
        probando()
        
          
    }, [])
    


    return(
        <>
        <FunkosAside/>
        <section className="container__shop__section">
            {data?data.map((dato, index) => (
                // Renderiza los datos usando map()
                <FunkosCard key={index} funko={dato}/>
            )):null}
            
        </section>
        </>
    )
}