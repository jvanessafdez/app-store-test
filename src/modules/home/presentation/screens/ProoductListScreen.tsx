import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StatusBarStyle, Text, Image } from 'react-native';
import { View } from 'react-native';
import general from '../../../../assets/css/general';
import { CustomButton } from '../../../../components/common/Button/button';
import { useNavigation } from '@react-navigation/native';
import { SmallCard } from '../../../../components/common/SmallCard/smallCard';
import sport_elements from '../../../../assets/images/sport_elements.png'
import clothes from '../../../../assets/images/clothes.png'
import shoes from '../../../../assets/images/shoes.png'
import { colors } from '../../../../assets/css/colors';
import { arrayProducts } from '../../../../../mocks/elements';
import { ECategory, Product } from '../../domain/product';
import { ProductCard } from '../components/productCard';
import { TouchableOpacity } from 'react-native-gesture-handler';

const STYLES = ['default', 'dark-content', 'light-content'] as const;

function ProductListScreen() {
  const navigation = useNavigation()
  const [category, setCategory] = useState(ECategory.ELEMENT)
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[1],
  );

  interface CardProps {
    color?: string;
    image: string;
    label: string;
    category: string;
  }

  const CardImage = ({color, image, label, category}: CardProps) => {
    return(
      <TouchableOpacity onPress={() => setCategory(category)}>
      <SmallCard
        width={110}
        color = {color && color}
      >
        <Image
          source={image}
          style={general.stretch}
        />
        <Text style={[general.normalText, {textAlign: 'center'}]}>{label}</Text>
      </SmallCard>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={general.screen}>
      <StatusBar
        backgroundColor='transparent'
        barStyle={statusBarStyle}
      />
      <View style={{height:'23%'}}>
        <Text style={[general.subtitle, general.marginLeft20]}>Categorías</Text>
        <View style={[general.rowSpace, {width:'95%', alignSelf:'flex-end'}]}>
          <CardImage image={sport_elements} label={'Elementos\nDeportivos'} category={ECategory.ELEMENT}/>
          <CardImage color={colors.category2} image={clothes} label={'Ropa\nDeportiva'} category={ECategory.CLOTHES}/>
          <CardImage color={colors.category3} image={shoes} label={'Zapatos\nDeportivos'} category={ECategory.SHOES}/>
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