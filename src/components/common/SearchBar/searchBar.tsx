import React from 'react';
import { VStack, Input, Icon, NativeBaseProvider } from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { CustomButton } from '../Button/button';

interface SearchBarComponentProps {
  title: string;
}

const SearchBarComponent: React.FC<SearchBarComponentProps> = ({ title }) => {
  return <VStack my='0' w='100%' maxW='85%'>
      <VStack w='100%' alignSelf='left' flexDirection='row'>
        <Input 
          placeholder={title} 
          variant='filled'
          width='95%'
          height={10}
          borderRadius='0'
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