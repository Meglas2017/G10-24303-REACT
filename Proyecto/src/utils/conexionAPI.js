// conexion a la API
// INSTALAR AXIOS = npm install axios --
import axios from "axios"

const urlAPI = ""
export const get = async (path) => {
    try {
        const options = {//Configuro el encabezamiento de la solicitud
            method: 'GET',
            headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDNkNmEyOTIyNmY1YWM2NTBkNGNkZTA3OTI0N2M0ZiIsInN1YiI6IjY2MjA2ZDc5MzJjYzJiMDE3YzBjNjM1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.umiqk3DeOozfd0wPU8kJC1aAi7pzpmv3V87MYsUgvPY'
                }
            };
        
        const results = await axios(urlAPI+path, options)
        // console.log(results);
        return results.data
    } catch (error) {
        console.log(error)
    }


}
