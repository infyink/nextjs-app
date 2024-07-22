'use client';
import { Button, Group } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useSearchParams } from 'next/navigation';
import { useUrlSearchParams } from '../../hooks/use-update-url-search-param';
import { ApplyBtn } from './ApplyBtn';


const DateRange = () => {
  const searchParams = useSearchParams();
  const startDateParams = searchParams.get('startDate');
  const endDateParams = searchParams.get('endDate');
  const updateParams = useUrlSearchParams();

  const startDate = new Date(startDateParams || new Date());
  const endDate = new Date(endDateParams || new Date());

  return (
    <Group align="flex-end" wrap="nowrap">
      <DateInput
        maw={150}
        value={startDate}
        onChange={(value) => updateParams({ startDate: value?.toISOString() })}
        valueFormat="ddd, DD-MMM-YYYY"
        placeholder="Start date (DD-MMM-YYYY)"
        size="xs"
      />
      <DateInput
        maw={150}
        value={endDate}
        onChange={(value) => updateParams({ endDate: value?.toISOString() })}
        valueFormat="ddd, DD-MMM-YYYY"
        placeholder="End date (DD-MMM-YYYY)"
        size="xs"
      />
      <ApplyBtn  />
    </Group>
  );
};

export default DateRange;