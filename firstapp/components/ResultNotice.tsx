import { Alert, Text } from "@mantine/core";
import { useSearchParams } from "next/navigation";
import React from "react";
import { formatDate } from "../functions/format-date";

export const ResultNotice = () => {
  const searchParams = useSearchParams();
  const startDateParams = searchParams.get("startDate");
  const endDateParams = searchParams.get("endDate");
  return (
    <Text c="dimmed" size="sm" fs="italic">
      <Text>
        You are seeing the results  of{" "}
        <b>
          {startDateParams ? formatDate(startDateParams): ''} - 
          {endDateParams ? formatDate(endDateParams): ' '}
        </b>
      </Text>
    </Text>
  );
};
