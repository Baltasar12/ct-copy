import { FC, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { FormikErrors } from "formik";
// MUI ICON COMPONENTS
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import ModeEditOutline from "@mui/icons-material/ModeEditOutline";
// LOCAL CUSTOM COMPONENTS
import Heading from "./heading";
import NewAddressForm from "./new-address-form";
import EditAddressForm from "./edit-address-form";
// GLOBAL CUSTOM COMPONENTS
import { H6, Paragraph } from "@/components/Typography";
import { FlexBetween, FlexBox } from "@/components/flex-box";
import { Address, InitialValues } from "./_types";
import useCustomerAddresses from '@/hooks/useCustomerAddresses';

// ==============================================================
interface Props {
  values: FormikErrors<InitialValues>;
  handleFieldValueChange: (value: string, fieldName: string) => void;
}
// ==============================================================

const DeliveryAddress: FC<Props> = ({ values, handleFieldValueChange }) => {
  const [addressList, setAddressList] = useState<Address[]>([]);
  const [editAddressId, setEditAddressId] = useState(0);

  const changeEditAddressId = () => setEditAddressId(0);

  const handleAddNewAddress = (address: Omit<Address, 'id'>) => {
    setAddressList((state) => [...state, { ...address, id: Date.now() }]);
  };

  const handleDeleteAddress = (addressId: number) => {
    setAddressList((state) => state.filter((item) => item.id !== addressId));
  };

  const handleEditAddress = (addressId: number, data: Address) => {
    setAddressList((state) => {
      return state.map((item) => {
        if (item.id === addressId) return { ...data };
        else return item;
      });
    });
  };

/*   const { addresses, loading, error } = useCustomerAddresses(customerId); // Reemplaza customerId con el ID del cliente actual

  useEffect(() => {
    if (!loading && !error) {
      setAddressList(addresses);
    }
  }, [addresses, loading, error]); */

  return (
    <Card sx={{ p: 3, mb: 3 }}>
      {/* HEADING & BUTTON SECTION */}
      <FlexBetween mb={4}>
        <Heading number={1} title="Dirección de envío" mb={0} />
        <NewAddressForm handleAddNewAddress={handleAddNewAddress} />
      </FlexBetween>

      {/* ADDRESS LIST SECTION */}
      <Grid container spacing={3}>
        {addressList.map((item, ind) => (
          <Grid item md={4} sm={6} xs={12} key={ind}>
            <Card
              onClick={() => handleFieldValueChange(item.street1, "address")}
              sx={{
                padding: 2,
                boxShadow: "none",
                cursor: "pointer",
                border: "1px solid",
                position: "relative",
                backgroundColor: "grey.100",
                borderColor: item.street1 === values.address ? "primary.main" : "transparent"
              }}>
              <FlexBox position="absolute" top={5} right={5}>
                <IconButton size="small" onClick={() => setEditAddressId(item.id)}>
                  <ModeEditOutline fontSize="inherit" />
                </IconButton>

                <IconButton size="small" color="error" onClick={() => handleDeleteAddress(item.id)}>
                  <DeleteOutline fontSize="inherit" />
                </IconButton>
              </FlexBox>

              <H6 mb={0.5}>{item.name}</H6>
              <Paragraph color="grey.700">{item.street1}</Paragraph>
              {item.street2 ? <Paragraph color="grey.700">{item.street2}</Paragraph> : null}
              <Paragraph color="grey.700">{item.phone}</Paragraph>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* SHOW EDIT ADDRESS FORM MODAL WHEN CLICK EDIT BUTTON */}
      {editAddressId ? (
        <EditAddressForm
          handleEditAddress={handleEditAddress}
          active={editAddressId ? true : false}
          changeEditAddressId={changeEditAddressId}
          address={addressList.find((item) => item.id === editAddressId) as any}
        />
      ) : null}
    </Card>
  );
};



export default DeliveryAddress;
