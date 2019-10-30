import React from 'react';
import { StatusBar } from 'react-native';
import './config/ReactotronConfig'; // debug
import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7155c0" />
      <Routes />
    </>
  );
}

export default App;
