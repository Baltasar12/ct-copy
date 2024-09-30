import axios from "axios";

const API_TOKEN = process.env.NEXT_PUBLIC_TIENDANUBE_API_TOKEN;
const USER_AGENT = process.env.NEXT_PUBLIC_TIENDANUBE_USER_AGENT;
const API_URL = process.env.NEXT_PUBLIC_TIENDANUBE_API_URL;
const STORE_ID = process.env.NEXT_PUBLIC_TIENDANUBE_STORE_ID;

export const tiendaNubeApi = axios.create({
  baseURL: `${API_URL}/${STORE_ID}/`,
  headers: {
    Authentication: `bearer ${API_TOKEN}`,
    "Content-Type": "application/json",
    "User-Agent": USER_AGENT,
  },
});
