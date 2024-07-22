// components/CustomerDetails.tsx
import { TextInput, Group, Paper } from "@mantine/core";
import classes from "./salesform.module.css";

interface CustomerDetailsProps {
  customerName: string;
  setCustomerName: (value: string) => void;
  customerPhone: string;
  setCustomerPhone: (value: string) => void;
  customerAddress: string;
  setCustomerAddress: (value: string) => void;
}

const CustomerDetails = ({
  customerName,
  setCustomerName,
  customerPhone,
  setCustomerPhone,
  customerAddress,
  setCustomerAddress
}: CustomerDetailsProps) => {
  return (
    <>
      <Paper p="xs" className={classes.subHeader}>
        Enter Customer Details
      </Paper>
      <Group grow>
        <TextInput
          label={<span className={classes.labelStyles}>Enter Customer Name</span>}
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <TextInput
          label={<span className={classes.labelStyles}>Enter Customer Phone Number</span>}
          placeholder="Customer Phone Number"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
        />
        <TextInput
          label={<span className={classes.labelStyles}>Customer Address</span>}
          placeholder="Customer Address"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
        />
      </Group>
    </>
  );
};

export default CustomerDetails;
