import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_CART,
});

export default instance;
