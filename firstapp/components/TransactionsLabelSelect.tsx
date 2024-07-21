import { Select } from '@mantine/core'
import React from 'react'

export const TransactionsLabelSelect = () => {
  return (
    <Select
    size = "xs"
    placeholder = "filter by transaction label"
    data={['Week1', 'Week2']}
    searchable
    nothingFoundMessage = "No transactions found for date range"

    />
  )
}
