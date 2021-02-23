import React from 'react';
import {StatusBar} from 'react-native';
import LoginPage from './src/pages/Login';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <LoginPage />
    </>
  );
};

export default App;
