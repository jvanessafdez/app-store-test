import React, { useEffect } from 'react';
import { VStack, Input, Icon, NativeBaseProvider } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { CustomButton } from '../Button/button';
import { Product } from '../../../modules/home/domain/product';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { productFilter } from '../../../modules/home/infraestructure/slices/productSlice';

interface SearchBarComponentProps {
  title: string;
}

const SearchBarComponent: React.FC<SearchBarComponentProps> = ({ title }) => {
  const arrayProducts: Product[] = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();
  const [query, setQuery] = React.useState<string>('')

    useEffect(() => {
        dispatch(productFilter(arrayProducts));
    }, [arrayProducts])

const handleFilterArray = () => {
  const search = arrayProducts.filter((item) => {
    if (item.title.toLowerCase().includes(query.toLowerCase())) {
      console.log('filtra')
      return item;
    }
  });
  dispatch(productFilter(search));
}
  return <VStack my='0' w='100%' maxW='85%'>
      <VStack w='100%' alignSelf='left' flexDirection='row'>
        <Input 
          placeholder={title} 
          variant='filled'
          width='95%'
          height={10}
          borderRadius='0'
          onChangeText={setQuery}
          InputLeftElement={
            <Icon
              ml='2'
              size='4'
              color='gray.400'
              as={<MaterialIcons name='search'/>} 
            />
          } 
        />
        <CustomButton
          text={'Filtro'}
          icon
          onPress={handleFilterArray}
        />
      </VStack>
    </VStack>;
}

interface SearchBarProps {
  title: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ title }) => {
  return (
    <NativeBaseProvider>
      <SearchBarComponent title={title} />
    </NativeBaseProvider>
  )
};