import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './shared/context/authContext';
import { useAuth } from './shared/hook/authHook';
import Auth from './user/page/Auth';
import ClaimsFormContainer from './claimsForm/ClaimsForm';
import UpdateClaims from './UpdateClaims';

function App() {
  const {token, login, logout, userId } = useAuth();
  let routes;

  if (true) {
      routes = (
          <Routes>
              <Route path="/claims" exact>
                {/* display claim */}
              </Route>
              <Route path="/claims/new" exact>
                {/* <ClaimsFormContainer/> */}
              </Route>
              <Route path="/claims/:claimId" exact>
                  {/* update claim */}
              </Route>
              <Navigate to="/" />
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
          login: login,
          logout: logout
        }
      }
    >
      <Router>
        <main>
          <ClaimsFormContainer/>
         <UpdateClaims />
       </main>
      </Router>
    </AuthContext.Provider>

  );
}

export default App;
