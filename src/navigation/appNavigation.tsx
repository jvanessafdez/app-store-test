import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductListScreen from '../modules/home/presentation/screens/ProoductListScreen';
import AddProductScreen from '../modules/home/presentation/screens/AddProductScreen';
import { Header } from '../layouts/header';
import ProductInformationScreen from '../modules/home/presentation/screens/ProductInformationScreen';
import { RootStackParamList } from './navigationTypes';

const Stack = createStackNavigator<RootStackParamList>();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen 
          name="ProductList"
          component={ProductListScreen}
          options = {{
            header: (props) => <Header title='Productos' search {...props}/>
          }}
        />
        <Stack.Screen 
          name="AddProduct"
          component={AddProductScreen}
          options = {{
            header: (props) => <Header title='Añadir Producto' {...props}/>
          }}
        />
        <Stack.Screen 
          name="ProductInfo"
          component={ProductInformationScreen}
          options = {{
            header: (props) => <Header title='Información del Producto' {...props}/>
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;