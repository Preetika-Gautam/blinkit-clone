import axios from "axios";

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProducts = async () => {
  const response = await API.get("/products?limit=20");
  console.log(response);
  return response.data.products;
};
