'use client';
import { AppLayout } from "../../../components/AppLayout";
import React from "react";
import SalesTrackingForm from "../../../components/transactions/SalesForm";

const TransactionPage = () => {
  return (
    <AppLayout>
      <SalesTrackingForm></SalesTrackingForm>
    </AppLayout>
  );
};

export default TransactionPage;
