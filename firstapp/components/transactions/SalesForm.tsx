"use client";
import React, { useState, useEffect } from 'react';
import { Container, TextInput, NumberInput, Button, Group, Box, Card, Divider, Paper, ActionIcon, Textarea, Select } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { IconTrash, IconPlus } from '@tabler/icons-react';
import classes from './salesform.module.css';
import { tablenames } from '../../consts';
import MenuItemSelector from './menuItem/MenuItemSelector'; // Ensure path is correct
import { handleItemChange, addItemRow, deleteItemRow, calculateTotalAmount, handleSubmit, handleDateChange } from '../../functions/menu-form'; // Ensure import paths are correct
import CustomerDetails from './CustomerDetails';
import supabase from '../../lib/data';

export default function SalesTrackingForm() {
  const [items, setItems] = useState([
    { menuItem: '', quantity: 1, unitPrice: 0, totalItemPrice: 0 },
  ]);
  const [transactionDate, setTransactionDate] = useState<Date | null>(new Date());
  const [invoiceId, setInvoiceId] = useState('');
  const [notes, setNotes] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [selectedTable, setSelectedTable] = useState('');
  const [formattedMenuItems, setFormattedMenuItems] = useState<any[]>([]);

  // Group items by category and subcategory
  const groupMenuItems = () => {
    const groupedItems: { [key: string]: { [key: string]: any[] } } = {};

    formattedMenuItems.forEach((item) => {
      if (!groupedItems[item.category]) {
        groupedItems[item.category] = {};
      }
      if (!groupedItems[item.category][item.subcategory]) {
        groupedItems[item.category][item.subcategory] = [];
      }
      groupedItems[item.category][item.subcategory].push(item);
    });
    return groupedItems;
  };

  const groupedMenuItems = groupMenuItems();

  useEffect(() => {
    const fetchMenuItems = async () => {
      const { data, error } = await supabase.from('MenuItem').select('*');
      if (error) {
        console.error('Error fetching menu items:', error);
      } else {
        console.log('Fetched menu items:', data); // Debug fetched data
        const formatted = data.map((item: any) => ({
          value: item.id,
          category: item.category,
          subcategory: item.subcategory,
          name: item.name,
        }));
        setFormattedMenuItems(formatted);
      }
    };
  
    fetchMenuItems();
  }, []);

  const handleItemChangeWrapper = (index: number, field: string, value: any) => {
        handleItemChange(index, field, value, items, setItems, calculateTotalAmount);
   
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
        <form onSubmit={(e) => handleSubmit(e, totalAmount, discount)}>
          {" "}
          <Box mb="md">
            <Group mb="md" grow>
              <Select
                label={
                  <span className={classes.labelStyles}>Select Table</span>
                }
                placeholder="Choose a table"
                value={selectedTable}
                onChange={(value: any) => setSelectedTable(value || "")}
                data={tablenames}
                required
              />
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
                onChange={(value) =>
                  handleDateChange(value, setTransactionDate)
                }
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
          <CustomerDetails
            customerName={customerName}
            setCustomerName={setCustomerName}
            customerPhone={customerPhone}
            setCustomerPhone={setCustomerPhone}
            customerAddress={customerAddress}
            setCustomerAddress={setCustomerAddress}
          />
          <Box my="xl" mb="md">
            <Paper p="xs" className={classes.subHeader}>
              Enter Menu
            </Paper>
            <Box mb="md">
              {items.map((item, index) => (
                <Group key={index}  >
                  <MenuItemSelector
                    index={index}
                    menuItem={item.menuItem}
                    groupedMenuItems={groupedMenuItems}
                    handleItemChange={handleItemChangeWrapper}
                  />
                  <NumberInput
                    placeholder="Quantity"
                    value={item.quantity}
                    onChange={(value) =>
                      handleItemChange(
                        index,
                        "quantity",
                        value || 0,
                        items,
                        setItems,
                        calculateTotalAmount
                      )
                    }
                    min={1}
                    required
                    style={{ flex: 1 }}
                  />
                  <NumberInput
                    placeholder="Unit Price"
                    value={item.unitPrice}
                    onChange={(value) =>
                      handleItemChange(
                        index,
                        "unitPrice",
                        value || 0,
                        items,
                        setItems,
                        calculateTotalAmount
                      )
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
                      handleItemChange(
                        index,
                        "totalItemPrice",
                        value || 0,
                        items,
                        setItems,
                        calculateTotalAmount
                      )
                    }
                    min={0}
                    step={1}
                    required
                    style={{ flex: 1 }}
                  />
                  <ActionIcon
                    variant="light"
                    onClick={() => addItemRow(items, setItems)}
                    style={{ flex: 0.5 }}
                  >
                    <IconPlus size={25} />
                  </ActionIcon>
                  <ActionIcon
                    variant="light"
                    onClick={() => deleteItemRow(index, items, setItems)}
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
