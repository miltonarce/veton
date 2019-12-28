import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const auth = localStorage.getItem('auth') ?  JSON.parse(localStorage.getItem('auth')) : null;
  const userData = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
  const [logged, setLogged] = useState(auth);
  const [user, setUser] = useState(userData);

  useEffect(() => {
    if (logged !== null && user !== null) {
      localStorage.setItem('auth', logged);
      localStorage.setItem('userData', JSON.stringify(user));
    }
  }, [logged, user]);

  const defaultContext = {
    login: auth => {
      setLogged(auth.logged);
      setUser(auth.user);
    },
    auth: {
      logged,
      user
    }
  };

  return <AppContext.Provider value={defaultContext}>{children}</AppContext.Provider>

}

export default AppProvider;
