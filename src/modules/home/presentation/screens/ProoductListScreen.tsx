import React, { useState } from 'react';
import { 
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View
} from 'react-native';
import general from '../../../../assets/css/general';
import { CustomButton } from '../../../../components/common/Button/button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { colors } from '../../../../assets/css/colors';
import { arrayProducts } from '../../../../../mocks/elements';
import { ECategory, Product } from '../../domain/product';
import { ProductCard } from '../components/productCard';
import { CardImage } from '../components/cardImage';
import { RootStackParamList } from '../../../../navigation/navigationTypes';

const STYLES = ['default', 'dark-content', 'light-content'] as const;

function ProductListScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [category, setCategory] = useState<ECategory>(ECategory.ELEMENT);
  const statusBarStyle = STYLES[1];

  return (
    <SafeAreaView style={general.screen}>
      <StatusBar
        backgroundColor='transparent'
        barStyle={statusBarStyle}
      />
      <View style={{height:'23%'}}>
        <Text style={[general.subtitle, general.marginLeft20]}>Categorías</Text>
        <View style={[general.rowSpace, {width:'95%', alignSelf:'flex-end'}]}>
          <CardImage 
            label={'Elementos\nDeportivos'}
            category={ECategory.ELEMENT}
            setCategory={setCategory}
          />
          <CardImage 
            color={colors.category2}
            label={'Ropa\nDeportiva'}
            category={ECategory.CLOTHES}
            setCategory={setCategory}
          />
          <CardImage
            color={colors.category3}
            label={'Zapatos\nDeportivos'}
            category={ECategory.SHOES}
            setCategory={setCategory}
            />
        </View>
      </View>
      <ScrollView style={{height:'67%'}}>
        {arrayProducts.map((product: Product) =>{
          if(product.category == ECategory.ELEMENT && category == ECategory.ELEMENT){
            return <ProductCard key={product.id} product={product}/>
          }
          if(product.category == ECategory.CLOTHES && category == ECategory.CLOTHES){
            return <ProductCard key={product.id} product={product}/>
          }
          if(product.category == ECategory.SHOES && category == ECategory.SHOES){
            return <ProductCard key={product.id} product={product}/>
          }
        })}
      </ScrollView>
      <View style={{height:'10%', padding:15}}>
        <CustomButton
          text='Añadir Producto'
          width={'100%'}
          onPress={() => navigation.navigate('AddProduct')}
        />
      </View>
    </SafeAreaView>
  );
}

export default ProductListScreen;