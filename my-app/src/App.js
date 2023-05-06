import { AuthContext } from './shared/context/authContext';
import { useAuth } from './shared/hook/authHook';
import Auth from './user/page/Auth';

function App() {
  const {token, login, logout, userId } = useAuth();

  return (
    <AuthContext.Provider 
      value={
        {
          isLoggedIn: !!token,
          userId: userId,
          token: token,
          login: login,
          logout: logout
        }
      }
    >
      <header>
        <Auth />
      </header>
    </AuthContext.Provider>

  );
}

export default App;
