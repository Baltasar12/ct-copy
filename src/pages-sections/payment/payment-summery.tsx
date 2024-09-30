import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
// LOCAL CUSTOM COMPONENT
import PaymentItem from "./payment-item";
// GLOBAL CUSTOM COMPONENTS
import { Paragraph } from "@/components/Typography";
// CUSTOM UTILS LIBRARY FUNCTION
import { currency } from "@/lib";

export default function PaymentSummary() {
  return (
    <Card sx={{ padding: { sm: 3, xs: 2 } }}>
      <PaymentItem title="Subtotal:" amount={2610} />
      <PaymentItem title="Envío:" />
      <PaymentItem title="Impuesto:" amount={40} />
      <PaymentItem title="Descuento:" amount={40} />

      <Divider sx={{ my: 2 }} />

      <Paragraph fontSize={25} fontWeight={600} lineHeight={1} textAlign="right">
        {currency(2650)}
      </Paragraph>
    </Card>
  );
}
