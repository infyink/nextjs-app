// functions/menu-form.ts
import { Dispatch, SetStateAction } from "react";

export const handleItemChange = (
  index: number,
  field: string,
  value: any,
  items: any[],
  setItems: Dispatch<SetStateAction<any[]>>,
  calculateTotalAmount: (items: any[]) => void
) => {
  const updatedItems = items.map((item, i) =>
    i === index ? { ...item, [field]: value } : item
  );
  setItems(updatedItems);
  calculateTotalAmount(updatedItems);
};

export const addItemRow = (items: any[], setItems: Dispatch<SetStateAction<any[]>>) => {
  setItems([
    ...items,
    { menuItem: "", quantity: 1, unitPrice: 0, totalItemPrice: 0 },
  ]);
};

export const deleteItemRow = (index: number, items: any[], setItems: Dispatch<SetStateAction<any[]>>) => {
  const updatedItems = items.filter((_, i) => i !== index);
  setItems(updatedItems);
};

export const calculateTotalAmount = (items: any[]) => {
  return items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
};

export const handleSubmit = (
  event: React.FormEvent,
  totalAmount: number,
  discount: number
) => {
  event.preventDefault();
  const finalAmount = totalAmount - (totalAmount * discount) / 100;
  alert(`Total amount after discount: NRs. ${finalAmount.toFixed(2)}`);
};

export const handleDateChange = (value: Date | null, setTransactionDate: Dispatch<SetStateAction<Date | null>>) => {
  if (value) {
    setTransactionDate(value);
  }
};
