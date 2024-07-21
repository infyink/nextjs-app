'use client';
import { Card, Group, Stack } from '@mantine/core';
import DateRange from './DateRange';
import { Suspense } from 'react';
import { PresetsSelect } from './PresetSelect';
import { ResultNotice } from './ResultNotice';
import { Stats } from './Stats/stats';
import { TransactionsLabelSelect } from './TransactionsLabelSelect';

// import { PieChart } from './PieChart';



export const Dashboard = () => {
  return (
    <Suspense fallback={undefined}>
      <Group justify="space-between" align="flex-end" my="lg" visibleFrom="md">
        <Group align="flex-end">
          <PresetsSelect />
          <DateRange />
        </Group>
        <TransactionsLabelSelect />
      </Group>

      <Stack my="lg" hiddenFrom="md">
        <Card withBorder>
          <DateRange />
        </Card>
        <Group align="flex-end" justify="space-between">
          <PresetsSelect />
          <TransactionsLabelSelect />
        </Group>
      </Stack>

      <ResultNotice />

      <Stats />

    </Suspense>
  );
};