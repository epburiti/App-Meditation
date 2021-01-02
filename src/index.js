import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
import Routes from "./routes";
// import { GlobalStyles } from "./styles/GlobalStyles";

import { AuthProvider } from "./contextjs/auth.js";
const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
}

export default App;