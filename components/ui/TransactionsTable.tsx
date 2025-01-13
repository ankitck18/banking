import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { formatAmount, getTransactionStatus } from '@/lib/utils'
  

const TransactionsTable = ({transactions} : TransactionTableProps) => {
  return (
    <Table>
        <TableHeader className='bg-[#f9fafb]'>
        <TableRow>
            <TableHead className="px-2">Transaction</TableHead>
            <TableHead className="px-2">Amount</TableHead>
            <TableHead className="px-2">Status</TableHead>
            <TableHead className="px-2">Date</TableHead>
            <TableHead className="px-2 max-md:hidden">Channel</TableHead>
            <TableHead className="px-2 max-md:hidden">Category</TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
        <TableRow>
    <TableCell>SuperMart</TableCell>
    <TableCell>150.00</TableCell>
    <TableCell>Debit</TableCell>
    <TableCell>2024-01-12</TableCell>
    <TableCell>Credit Card</TableCell>
    <TableCell>Expense</TableCell>
</TableRow>
<TableRow>
    <TableCell>Urban Cafe</TableCell>
    <TableCell>75.00</TableCell>
    <TableCell>Credit</TableCell>
    <TableCell>2024-01-13</TableCell>
    <TableCell>Cash</TableCell>
    <TableCell>Income</TableCell>
</TableRow>
<TableRow>
    <TableCell>ElectroWorld</TableCell>
    <TableCell>320.00</TableCell>
    <TableCell>Debit</TableCell>
    <TableCell>2024-01-10</TableCell>
    <TableCell>Net Banking</TableCell>
    <TableCell>Expense</TableCell>
</TableRow>
<TableRow>
    <TableCell>HealthPlus Pharmacy</TableCell>
    <TableCell>45.00</TableCell>
    <TableCell>Debit</TableCell>
    <TableCell>2024-01-09</TableCell>
    <TableCell>Cash</TableCell>
    <TableCell>Expense</TableCell>
</TableRow>
<TableRow>
    <TableCell>Freelance Project</TableCell>
    <TableCell>500.00</TableCell>
    <TableCell>Credit</TableCell>
    <TableCell>2024-01-08</TableCell>
    <TableCell>UPI</TableCell>
    <TableCell>Income</TableCell>
</TableRow>

        </TableBody>
    </Table>
  )
}

export default TransactionsTable