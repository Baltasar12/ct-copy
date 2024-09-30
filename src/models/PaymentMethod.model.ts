interface PaymentMethod {
    id: number;
    name: string;
    supported_payment_method_types:string[];
  }
  
  export default PaymentMethod;