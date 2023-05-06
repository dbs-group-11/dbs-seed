import './App.css';
import DashboardTitle from './DashboardTitle';
import Footer from './Footer';
import ExpenseTable from './ExpenseTable/ExpenseTable';
import { Button } from '@mui/material';


function App() {
  return (
    <div className="App">
    
      <ExpenseTable />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
