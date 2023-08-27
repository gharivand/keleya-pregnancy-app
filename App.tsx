import 'react-native-gesture-handler';
import React from 'react';
import ApplicationNavigator from './src/navigators/Application';
import './src/translations';
import StoreContextComponent from './src/context/Store';

const App = () => (
  <StoreContextComponent>
    <ApplicationNavigator />
  </StoreContextComponent>
);
export default App;
