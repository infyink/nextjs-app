import { Button } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React from "react";

export const ApplyBtn = () => {
  const searchParams = useSearchParams();
  const startDateParams = searchParams.get("startDate");
  const endDateParams = searchParams.get("endDate");

  //load data from supabase and load and set the transactions
  const loadAndSetTransactions = () => {


  };

  const handleApply = () => {
    if (startDateParams && endDateParams) {
      //loadTransactions
    }
  };

  return (
    <Button size="xs" color="green" onClick={handleApply}>
      Apply
    </Button>
  );
};
