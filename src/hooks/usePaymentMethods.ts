import { useState, useEffect } from 'react';
import { Services } from '../Services'; 
import PaymentMethod from '../models/PaymentMethod.model';


const usePaymentMethods = () => {
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]); // Tipificar el estado
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string>(null);
  
    useEffect(() => {
      const fetchPaymentMethods = async () => {
        try {
          const response = await Services.tiendanube.products.getProducts(); // Ejemplo, cambiar según tu API
          // Adaptar la transformación de datos según tu API
          const transformedData = response.data.map((item: any) => ({
            id: item.id,
            name: item.name,
            // ... otras propiedades del método de pago
          }));
          setPaymentMethods(transformedData); 
        } catch (err) {
          setError('Error al obtener los métodos de pago.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchPaymentMethods();
    }, []);
  
    return { paymentMethods, loading, error };
  };
  
  export default usePaymentMethods;