'use client';
import { AppLayout } from "../../../components/AppLayout";
import React from "react";
import SalesTrackingForm from "../../../components/transactions/SalesForm";

const TransactionPage = () => {
  return (
    <AppLayout>
      <h1><SalesTrackingForm></SalesTrackingForm></h1>
    </AppLayout>
  );
};

export default TransactionPage;
