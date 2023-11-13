import React from 'react';
import { Image } from 'react-native';
import { ECategory, Product } from '../../domain/product';
import { Box, Center, Text } from 'native-base';
import general from '../../../../assets/css/general';
import { colors } from '../../../../assets/css/colors';
import { Card } from '../../../../components/common/Card/card';
import { CustomButton } from '../../../../components/common/Button/button';
import { SmallCard } from '../../../../components/common/SmallCard/smallCard';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  return (
    <Center>
      <Card>
        <Box style={general.rowMargin}>
          <Box width={'30%'}>
          <Image 
            source={{uri:product.image}}
            style = {{
                width: 80,
                height: 80,
                resizeMode: 'stretch',
              }}
          />
          </Box>
          <Box width={'62%'}>
            <Box style={general.row}>
              <Text style={{ ...general.subtitle, flex: 5 }}>{product.title}</Text>
            </Box>
            <Text style={general.normalText}>{product.description}</Text>
          </Box>
          <Box width={'8%'}>
            <TouchableOpacity style={{alignSelf:'center'}}>
                <MaterialIcons name = {'arrow-forward-ios'} size={18} color={'#000000'}/>
            </TouchableOpacity>
          </Box>
        </Box>
        <Box>
        </Box>
      </Card>
    </Center>
  );
};