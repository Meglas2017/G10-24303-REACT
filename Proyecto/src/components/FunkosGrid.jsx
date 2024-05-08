import { useState, useEffect } from "react"
import { bd } from "../utils/firebase"
import { collection, getDocs } from "@firebase/firestore";
import { FunkosCard } from "./FunkosCard";

export const FunkosGrid = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const probando = async () => {
            try {
                const firulo = await getDocs(collection(bd, "funkos"));
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
        <section className="container__shop__section">
            {data?data.map((dato, index) => (
                // Renderiza los datos usando map()
                <FunkosCard key={index} funko={dato}/>
            )):null}
            
        </section>
    )
}