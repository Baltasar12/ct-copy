import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import FormControlLabel from "@mui/material/FormControlLabel";
// GLOBAL CUSTOM COMPONENTS
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
  sameAsShipping: boolean;
  handleCheckboxChange: (checked: boolean) => void;
}
// ==============================================================

export default function BillingAddressForm({
  errors,
  handleBlur,
  handleChange,
  setFieldValue,
  touched,
  values,
  sameAsShipping,
  handleCheckboxChange
}: Props) {
  return (
    <Card sx={{ mb: 4, p: 3 }}>
      <H6 mb={2}>Dirección de facturación</H6>

      <FormControlLabel
        label="Igual que dirección de envío"
        control={
          <Checkbox
            size="small"
            color="secondary"
            onChange={(e) => handleCheckboxChange(e.target.checked)}
          />
        }
        sx={{
          zIndex: 1,
          position: "relative",
          mb: sameAsShipping ? "" : "1rem"
        }}
      />

      {!sameAsShipping && (
        <Grid container spacing={6}>
          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              sx={{ mb: 2 }}
              label="Nombre Completo"
              name="billing_name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.billing_name}
              error={!!touched.billing_name && !!errors.billing_name}
              helperText={(touched.billing_name && errors.billing_name) as string}
            />

            <TextField
              fullWidth
              sx={{ mb: 2 }}
              onBlur={handleBlur}
              label="Número de telefono"
              name="billing_contact"
              onChange={handleChange}
              value={values.billing_contact}
              error={!!touched.billing_contact && !!errors.billing_contact}
              helperText={(touched.billing_contact && errors.billing_contact) as string}
            />

            <TextField
              fullWidth
              type="number"
              sx={{ mb: 2 }}
              label="Código postal"
              name="billing_zip"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.billing_zip}
              error={!!touched.billing_zip && !!errors.billing_zip}
              helperText={(touched.billing_zip && errors.billing_zip) as string}
            />

            <TextField
              fullWidth
              label="Dirección 1"
              onBlur={handleBlur}
              onChange={handleChange}
              name="billing_address1"
              value={values.billing_address1}
              error={!!touched.billing_address1 && !!errors.billing_address1}
              helperText={(touched.billing_address1 && errors.billing_address1) as string}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              fullWidth
              type="email"
              sx={{ mb: 2 }}
              onBlur={handleBlur}
              name="billing_email"
              label="Email Address"
              onChange={handleChange}
              value={values.billing_email}
              error={!!touched.billing_email && !!errors.billing_email}
              helperText={(touched.billing_email && errors.billing_email) as string}
            />

   

            <Autocomplete
              fullWidth
              sx={{ mb: 2 }}
              options={countryList}
              value={values.billing_country}
              getOptionLabel={(option) => option.label}
              onChange={(_, value) => setFieldValue("billing_country", value)}
              renderInput={(params) => (
                <TextField
                  label="País"
                  placeholder="Select Country"
                  error={!!touched.billing_country && !!errors.billing_country}
                  helperText={(touched.billing_country && errors.billing_country) as string}
                  {...params}
                />
              )}
            />

            <TextField
              fullWidth
              label="Dirección 2"
              onBlur={handleBlur}
              name="billing_address2"
              onChange={handleChange}
              value={values.billing_address2}
              error={!!touched.billing_address2 && !!errors.billing_address2}
              helperText={(touched.billing_address2 && errors.billing_address2) as string}
            />
          </Grid>
        </Grid>
      )}
    </Card>
  );
}
