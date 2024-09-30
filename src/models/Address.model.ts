
interface Address {
  id: number;
  customer_id: number; // ID del cliente al que pertenece la dirección
  first_name: string;
  last_name: string;
  address1: string; // Calle y número
  address2: string | null; 
  city: string;
  province: string; // Estado/Provincia
  zip_code: string;
  country: string;
  phone: string; 
}

export default Address;
