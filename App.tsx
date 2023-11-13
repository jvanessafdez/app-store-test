/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import AppNavigation from './src/navigation/appNavigation';
import { NativeBaseProvider, Container } from 'native-base';

const App: React.FC = () => {
  return (
    <NativeBaseProvider>
        <AppNavigation/>
    </NativeBaseProvider>
  );
};

export default App;