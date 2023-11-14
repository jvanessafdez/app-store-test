/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import AppNavigation from './src/navigation/appNavigation';
import { NativeBaseProvider, Container } from 'native-base';
import { Provider } from 'react-redux';
import store from './src/store/store'

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <AppNavigation/>
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;