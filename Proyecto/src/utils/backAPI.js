import axios from "axios"

// const apiUrl = ""

export const backAPI =async (path) => {

    try{
        //Armar encabezado para mi API
        //
        const response = await axios.get(path);
        return response.data;
    } catch (error){
        console.log(error);
    }
}