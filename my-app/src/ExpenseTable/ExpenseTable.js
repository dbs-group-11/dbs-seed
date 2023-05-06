import * as React from 'react';
import './ExpenseTable.css';
import OwnExpenseTable from './OwnExpenseTable';
import UnderlingsExpenseTable from './UnderlingsExpenseTable';
import DashboardTitle from '../DashboardTitle';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ExpenseTable() {
  
  return (
    <div className='expense-table'>
    <DashboardTitle />
      <div className='create-claim-btn'>
      <Button variant="contained"><Link to='/claims/new'>Create Claim</Link></Button></div>
    <label className='expense-table-header'>Own Claims:</label>
    <OwnExpenseTable/>
    <label className='expense-table-header'>Managed Employee Claims:</label>
    <UnderlingsExpenseTable/>
    </div>
  );
}