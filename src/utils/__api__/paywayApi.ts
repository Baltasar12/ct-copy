import axios from 'axios';

const paywayApi = axios.create({
  baseURL: 'https://api.payway.com.ar', // URL base de la API de Payway
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer YOUR_API_KEY`, // Reemplazar con API Key
  },
});

export default paywayApi;
