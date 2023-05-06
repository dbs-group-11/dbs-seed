import { createContext } from "react";

export const AuthContext = createContext(
    {
        isLoggedIn: false,
        userId: null,
        lastName: null,
        firstName: null,
        token: null,
        login: () => {},
        logout: () => {} 
    }
);