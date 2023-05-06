import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './shared/context/authContext';
import { useAuth } from './shared/hook/authHook';
import Auth from './user/page/Auth';

function App() {
  const {token, login, logout, userId, firstName, lastName} = useAuth();
  let routes;

  if (token) {
      routes = (
          <Routes>
              <Route path="/claims" exact>
                {/* display claim */}
              </Route>
              <Route path="/claims/new" exact>
                {/* create claim */}
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
          isLoggedIn: !!token,
          userId: userId,
          token: token,
          firstName: firstName,
          lastName: lastName,
          login: login,
          logout: logout
        }
      }
    >
      <Router>
        <main>
          <Auth />
        </main>
      </Router>
    </AuthContext.Provider>

  );
}

export default App;
