import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StatusBarStyle } from 'react-native';
import { View } from 'react-native';
import general from '../../../../assets/css/general';
import { CustomButton } from '../../../../components/common/Button/button';
import { useNavigation } from '@react-navigation/native';

const STYLES = ['default', 'dark-content', 'light-content'] as const;

function ProductListScreen() {
  const navigation = useNavigation()
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[1],
  );

  return (
    <SafeAreaView style={general.screen}>
      <StatusBar
        backgroundColor='transparent'
        barStyle={statusBarStyle}
      />
      <ScrollView style={{height:'90%'}}>
      </ScrollView>
      <View style={{height:'10%'}}>
        <CustomButton
          text='Añadir Producto'
          width={'90%'}
          onPress={() => navigation.navigate('AddProduct')}
        />
      </View>
    </SafeAreaView>
  );
}

export default ProductListScreen;