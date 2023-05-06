import './App.css';

import ExpenseTable from './ExpenseTable/ExpenseTable';

import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './shared/context/authContext';
import { useAuth } from './shared/hook/authHook';
import Auth from './user/page/Auth';
import ClaimsFormContainer from './claimsForm/ClaimsForm';
import UpdateClaims from './UpdateClaims';

function App() {
  const {token, login, logout, userId, firstName, lastName} = useAuth();
  let routes;

  if (true) {
      routes = (
          <Routes>
              <Route path="/" element={<ExpenseTable/>}>
               
              </Route>
              <Route path="/claims/new" element={<ClaimsFormContainer/>}>

                {/* create claim */}
              </Route>
              <Route path="/claims/:claimId" >
                  {/* update claim */}
              </Route>
              
          </Routes>
      );
  } else {
      routes = (
          <Routes>
              <Route path="/" exact>
                  <Auth />
              </Route>
              <Navigate to="/" />
          </Routes>
      );
  }
  return (
    <AuthContext.Provider 
      value={
        {
          isLoggedIn: true,
          userId: userId,
          token: token,
          firstName: 'firstName',
          lastName: 'lastName',
          login: login,
          logout: logout
        }
      }
    >
        <main>
          {routes}
        </main>
    </AuthContext.Provider>

  );
}

export default App;
