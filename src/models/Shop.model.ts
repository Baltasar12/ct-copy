import Product from "./Product.model";

interface Shop {
  id: number; 
  name: string;
  url: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  province: string;
  country: string;
  zip_code: string;
  currency: string;
  timezone: string;
}

export default Shop;
