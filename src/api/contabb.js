import axios from "axios"


export default axios.create({
    baseURL: "http://10.1.11.12:8081/swagger/index.html",
    headers: {
        X-API-KEY: ''
    }
})