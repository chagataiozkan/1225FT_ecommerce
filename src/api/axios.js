import axios from "axios";

const api = axios.create({
    baseURL: "https://one225ft-ecommerce-backend.onrender.com",
});

export default api;