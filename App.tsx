import React from 'react';
import {StatusBar} from 'react-native';
import LoginPage from './src/pages/Login';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <LoginPage />
      <FlashMessage position="top" />
    </>
  );
};

export default App;
