import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';
import Routes from "./routes";
// import { GlobalStyles } from "./styles/GlobalStyles";

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

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