import axios from "axios";
import handleResponse from "../utils/handleApiResponse";



const fetch = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,

    headers:{
        bearer:``,
    }


})





export const api = {
    get :handleResponse(fetch.get),
    post :handleResponse(fetch.post),
    put :handleResponse(fetch.put),
    delete :handleResponse(fetch.delete),
}


