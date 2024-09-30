import { number } from "yup";
import User from "./User.model";

interface OrderItem {
  id: number;
  product_id: number;
  variant_id: number;
  name: string;
  sku: string | null;
  quantity: number;
  price: number; // Precio unitario
  // agregar propiedades que falten
}

interface Order {
  id: number;
  customer: User; 
  status: string;
  total_price: number;
  shipping_address: {
    first_name: string;
    last_name: string;
    address: string;
    number: string;
    city: string;
    locality: string;
    province: string;
    zipcode: string;
    phone: string;
  };
  // agregar propiedades que falten
  items: OrderItem[];
}

export default Order;
