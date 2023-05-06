import * as React from 'react';
import './ExpenseTable.css';
import OwnExpenseTable from './OwnExpenseTable';
import UnderlingsExpenseTable from './UnderlingsExpenseTable';
import DashboardTitle from '../DashboardTitle';
import { Button } from '@mui/material';


export default function ExpenseTable() {
  
  return (
    <div className='expense-table'>
    <DashboardTitle />
      <div className='create-claim-btn'>
      <Button variant="contained">Create Claim</Button></div>
    <label className='expense-table-header'>Own Claims:</label>
    <OwnExpenseTable/>
    <label className='expense-table-header'>Managed Employee Claims:</label>
    <UnderlingsExpenseTable/>
    </div>
  );
}