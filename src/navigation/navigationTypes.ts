// navigationTypes.ts
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  ProductList: undefined;
  AddProduct: undefined;
  ProductInfo: undefined;
};

export type NavigationType = StackNavigationProp<RootStackParamList>;

export type RouteType<RouteName extends keyof RootStackParamList> = RouteProp<RootStackParamList, RouteName>;
