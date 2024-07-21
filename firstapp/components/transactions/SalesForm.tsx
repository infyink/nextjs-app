"use client";

import {
  Container,
  TextInput,
  NumberInput,
  Button,
  Group,
  Box,
  Card,
  Divider,
  Paper,
  ActionIcon,
  Textarea,
  Select,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconTrash, IconPlus } from "@tabler/icons-react";

import { useState } from "react";
import classes from "./salesform.module.css";
import { tablenames } from "../../consts";

export default function SalesTrackingForm() {
  const [items, setItems] = useState([
    { menuItem: "", quantity: 1, unitPrice: 0, totalItemPrice: 0 },
  ]);
  const [transactionDate, setTransactionDate] = useState<Date | null>(
    new Date()
  );
  const [invoiceId, setInvoiceId] = useState("");
  const [notes, setNotes] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [selectedTable, setSelectedTable] = useState("");

  const handleItemChange = (index: number, field: string, value: any) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
    calculateTotalAmount(updatedItems);
  };

  const addItemRow = () => {
    setItems([
      ...items,
      { menuItem: "", quantity: 1, unitPrice: 0, totalItemPrice: 0 },
    ]);
  };

  const deleteItemRow = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const calculateTotalAmount = (items: any[]) => {
    const total = items.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0
    );
    setTotalAmount(total);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const finalAmount = totalAmount - (totalAmount * discount) / 100;
    alert(`Total amount after discount: NRs. ${finalAmount.toFixed(2)}`);
  };
  const selectStyles = {
    label: {
      color: "gray",
      fontStyle: "italic",
    },
  };

  const handleDateChange = (value: Date | null) => {
    if (value) {
      setTransactionDate(value);
    }
  };
  return (
    <Container size="lg" className={classes.container}>
      <Card
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className={classes.card}
      >
        <Paper p="xl" className={classes.header}>
          Create Bill
        </Paper>
        <Divider my="sm" />
        <form onSubmit={handleSubmit}>
          <Box mb="md">
            <Group mb="md" grow>
              <Select
                // label="Select Table"
                label={
                  <span className={classes.labelStyles}>Select Table</span>
                }
                placeholder="Choose a table"
                value={selectedTable}
                // onChange={setSelectedTable}
                data={tablenames}
                required
                styles={selectStyles}
              />

              {/* <Box></Box> */}

              <TextInput
                label={<span className={classes.labelStyles}>Invoice ID</span>}
                placeholder="Invoice ID"
                value={invoiceId}
                onChange={(e) => setInvoiceId(e.target.value)}
                required
              />
              <DateInput
                label={
                  <span className={classes.labelStyles}>Transaction Date</span>
                }
                placeholder="Transaction Date"
                value={transactionDate}
                onChange={handleDateChange}
                required
              />
            </Group>
          </Box>

          <Textarea
            label={
              <span className={classes.labelStyles}>
                Please enter any comments or details
              </span>
            }
            placeholder="Notes/Description"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className={classes.textarea}
            mb="md"
          />
          {/* <div> */}
          <Paper p="xs" className={classes.subHeader}>
            Enter Customer Details
          </Paper>
          {/* <Box my="xl"></Box> */}
          <Group grow>
            <TextInput
              label={
                <span className={classes.labelStyles}>Enter Customer Name</span>
              }
              placeholder="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <TextInput
              label={
                <span className={classes.labelStyles}>
                  Enter Customer Phone Number
                </span>
              }
              placeholder="Customer Phone Number"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
            />
            <TextInput
              label={
                <span className={classes.labelStyles}>Customer Address</span>
              }
              placeholder="Customer Address"
              value={customerAddress}
              onChange={(e) => setCustomerAddress(e.target.value)}
            />
          </Group>

          <Box my="xl" mb="md"></Box>
          <Paper p="xs" className={classes.subHeader}>
            Enter Menu
          </Paper>
          {/* Labels for menu item fields */}
          <Box my="xl" mb="md">
            {/* Header Row */}
            <Box mb="md">
              {items.map((item, index) => (
                <Group key={index} mb="sm" className={classes.flexGroup}>
                  <TextInput
                    placeholder="Menu Item"
                    value={item.menuItem}
                    onChange={(e) =>
                      handleItemChange(index, "menuItem", e.target.value)
                    }
                    required
                    style={{ flex: 3 }}
                  />
                  <NumberInput
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={(value) =>
                      handleItemChange(index, "quantity", value || 0)
                    }
                    min={1}
                    required
                    style={{ flex: 1 }}
                  />
                  <NumberInput
                    placeholder="Unit Price"
                    value={item.unitPrice}
                    onChange={(value) =>
                      handleItemChange(index, "unitPrice", value || 0)
                    }
                    min={0}
                    step={1}
                    required
                    style={{ flex: 1 }}
                  />
                  <NumberInput
                    placeholder="Total amount of the item"
                    value={item.totalItemPrice}
                    onChange={(value) =>
                      handleItemChange(index, "totalItemPrice", value || 0)
                    }
                    min={0}
                    step={1}
                    required
                    style={{ flex: 1 }}
                  />
                  <ActionIcon
                    variant="light"
                    onClick={addItemRow}
                    style={{ flex: 0.5 }}
                  >
                    <IconPlus size={25} />
                  </ActionIcon>
                  <ActionIcon
                    variant="light"
                    onClick={() => deleteItemRow(index)}
                    style={{ flex: 0.5 }}
                  >
                    <IconTrash size={25} />
                  </ActionIcon>
                </Group>
              ))}
            </Box>
          </Box>

          <NumberInput
            label="Total Amount"
            value={totalAmount}
            readOnly
            mb="md"
            // parser={(value: string) => value.replace(/\$\s?|(,*)/g, "")}
            // formatter={(value: any) =>
            //   `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            // }
            className={classes.totalAmount}
          />

          <NumberInput
            label="Discount on Overall Transaction (%)"
            value={discount}
            onChange={(value) => setDiscount(value || 0)}
            min={0}
            max={100}
            step={1}
            required
            mb="md"
            className={classes.discountInput}
            // width={}
            // style={"width": "10px;"}
          />

          <Group className={classes.buttonGroup}>
            <Button
              type="button"
              variant="outline"
              onClick={() => alert("Saved")}
            >
              Save
            </Button>
            <Button type="submit" ml="sm">
              Submit
            </Button>
          </Group>
        </form>
      </Card>
    </Container>
  );
}
