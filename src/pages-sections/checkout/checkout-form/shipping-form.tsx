import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
// GLOBAL CUSTOM COMPONENT
import { H6 } from "@/components/Typography";
// DUMMY CUSTOM DATA
import countryList from "@/data/countryList";

// ==============================================================
interface Props {
  handleBlur: any;
  handleChange: any;
  values: any;
  touched: any;
  errors: any;
  setFieldValue: any;
}
// ==============================================================

export default function ShippingForm({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue
}: Props) {
  return (
    <Card sx={{ mb: 4, p: 3 }}>
      <H6 mb={2}>Dirección de envío</H6>

      <Grid container spacing={6}>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            label="Nombre Completo"
            onBlur={handleBlur}
            name="shipping_name"
            onChange={handleChange}
            value={values.shipping_name}
            error={!!touched.shipping_name && !!errors.shipping_name}
            helperText={(touched.shipping_name && errors.shipping_name) as string}
          />

          <TextField
            fullWidth
            sx={{ mb: 2 }}
            onBlur={handleBlur}
            label="Número de telefono"
            onChange={handleChange}
            name="shipping_contact"
            value={values.shipping_contact}
            error={!!touched.shipping_contact && !!errors.shipping_contact}
            helperText={(touched.shipping_contact && errors.shipping_contact) as string}
          />

          <TextField
            fullWidth
            type="number"
            sx={{ mb: 2 }}
            label="Código postal"
            name="shipping_zip"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.shipping_zip}
            error={!!touched.shipping_zip && !!errors.shipping_zip}
            helperText={(touched.shipping_zip && errors.shipping_zip) as string}
          />

          <TextField
            fullWidth
            label="Dirección 1"
            onBlur={handleBlur}
            onChange={handleChange}
            name="shipping_address1"
            value={values.shipping_address1}
            error={!!touched.shipping_address1 && !!errors.shipping_address1}
            helperText={(touched.shipping_address1 && errors.shipping_address1) as string}
          />
        </Grid>

        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            type="email"
            sx={{ mb: 2 }}
            onBlur={handleBlur}
            name="shipping_email"
            label="Email Address"
            onChange={handleChange}
            value={values.shipping_email}
            error={!!touched.shipping_email && !!errors.shipping_email}
            helperText={(touched.shipping_email && errors.shipping_email) as string}
          />



          <Autocomplete
            fullWidth
            sx={{ mb: 2 }}
            options={countryList}
            value={values.shipping_country}
            getOptionLabel={(option) => option.label}
            onChange={(_, value) => setFieldValue("shipping_country", value)}
            renderInput={(params) => (
              <TextField
                label="País"
                variant="outlined"
                placeholder="Select Country"
                error={!!touched.shipping_country && !!errors.shipping_country}
                helperText={(touched.shipping_country && errors.shipping_country) as string}
                {...params}
              />
            )}
          />

          <TextField
            fullWidth
            label="Dirección 2"
            onBlur={handleBlur}
            onChange={handleChange}
            name="shipping_address2"
            value={values.shipping_address2}
            error={!!touched.shipping_address2 && !!errors.shipping_address2}
            helperText={(touched.shipping_address2 && errors.shipping_address2) as string}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
