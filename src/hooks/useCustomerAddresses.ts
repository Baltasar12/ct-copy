import { useState, useEffect } from 'react';
import axios from 'axios';
import  Address  from '@/models/Address.model';

const useCustomerAddresses = (customerId: number) => {
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get(`/api/customers/${customerId}/addresses`); // Reemplaza con la ruta correcta de tu API
        setAddresses(response.data);
      } catch (err) {
        setError('Error al obtener las direcciones.');
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [customerId]);

  return { addresses, loading, error };
};

export default useCustomerAddresses;