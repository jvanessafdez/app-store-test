import React, { useEffect, useState } from 'react';
import { 
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image
} from 'react-native';
import general from '../../../../assets/css/general';
import { CustomButton } from '../../../../components/common/Button/button';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { arrayProducts } from '../../../../../mocks/elements';
import { RootStackParamList } from '../../../../navigation/navigationTypes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../../assets/css/colors';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch, useSelector } from 'react-redux';
import { saveProduct } from '../../infraestructure/slices/productSlice';
import { Product } from '../../domain/product';

const STYLES = ['default', 'dark-content', 'light-content'] as const;

type ProductInfoRouteProp = RouteProp<RootStackParamList, 'ProductInfo'>;

interface ProductInformationScreenProps {
    route: ProductInfoRouteProp;
  }

const ProductInformationScreen: React.FC<ProductInformationScreenProps> = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'ProductInfo'>>();
  const navigation = useNavigation();
  const statusBarStyle = STYLES[1];
  const products = useSelector((store:any) => store.products.products)
  const product = products.find((product: Product) => product.id === route.params.id);
  const [coords, setCoords] = useState({latitude:0, longitude: 0})
  const dispatch = useDispatch()

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCoords({latitude:latitude, longitude:longitude})
      },
    )
  }, [])

  if (product === undefined) {
    <SafeAreaView style={general.screen}>
      <StatusBar
        backgroundColor='transparent'
        barStyle={statusBarStyle}
      />
      <Text>Producto no encontrado</Text>
    </SafeAreaView>
  }

  return (
    <SafeAreaView style={general.screen}>
      <StatusBar
        backgroundColor='transparent'
        barStyle={statusBarStyle}
      />
      <View style={{height:'90%',width: '90%', alignSelf:'center'}}>
        <Image
          source={{uri:product.image}}
          style={general.detail}
        />
        <View style={general.rowSpace2}>
            <Text style={{...general.title, marginTop: 10, width: '90%'}}>{product.title}</Text>
            <View style={general.rowSpace}>
              <MaterialIcons name = {'local-grocery-store'} size={30} color={colors.primary} style={{marginTop: 10}}/>
            <Text style={general.quantity}>{product.quantity}</Text>
            </View>
        </View>
        <Text style={{...general.normalText, marginTop: 10}}>{product.description}</Text>
        <Text style={{...general.price, marginTop: 10}}>{'$ ' + product.price}</Text>
      </View>
      <View style={{height:'10%', padding:15}}>
        <CustomButton
          text='Reservar Producto'
          width={'100%'}
          onPress={() => dispatch(saveProduct({id: product?.id, coords}))}
        />
      </View>
    </SafeAreaView>
  );
}

export default ProductInformationScreen;