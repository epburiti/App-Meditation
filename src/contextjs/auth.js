import React, { createContext, useState } from "react";
import * as auth from "../services/auth";



const AuthContext = createContext({ signed: false, user: {}, signIn: () => { } });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function handleSign() {
    // email, password (formulário omitido)
    const response = await auth.signIn();
    const { token, user } = response;
    setUser(user);
  }
  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn: () => { handleSign() } }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;