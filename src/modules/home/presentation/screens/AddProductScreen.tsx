import React, {useState} from 'react';
import { SafeAreaView, StatusBar, ScrollView, Text, Touchable } from 'react-native';
import { CustomInput } from '../../../../components/common/Input/input';
import { Box, Center, Divider, View } from 'native-base';
import { useForm } from 'react-hook-form';
import form from '../../../../assets/css/form';
import general from '../../../../assets/css/general';
import { colors } from '../../../../assets/css/colors';
import { CustomButton } from '../../../../components/common/Button/button';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DocumentPickerComponent } from '../../../../components/common/ImagePicker/imagePicker';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { ECategory, Product } from '../../domain/product';
import { addProduct, addProductAsync } from '../../infraestructure/slices/productSlice';
import { AppDispatch } from '../../../../store/store';

const STYLES = ['default', 'dark-content', 'light-content'] as const;

function AddProductScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [statusBarStyle, setStatusBarStyle] = STYLES[1]
  const dispatch = useDispatch<AppDispatch>()
  const navigation = useNavigation()
  const [image, setImage] = useState('')      

  
  const onError = (errors: any, e: any) => console.log(errors, e);

  const handlePressImage = async () => {
    await DocumentPickerComponent({fileType:"images"}).then((file) => {
      setImage(file)
    })
  }

  const onSubmit = (data: Product) => {
    const product: Product = { ...data, category: ECategory.ELEMENT, image: image }
    dispatch(addProductAsync(product))
    navigation.goBack()
  };  

  return (
    <SafeAreaView style={general.screen}>
      <StatusBar
        backgroundColor='transparent'
        barStyle={statusBarStyle}
      />
      <ScrollView
        style = {{...general.marginTop, height:'90%'}}
        showsVerticalScrollIndicator = {false}
      >
        <Center>
          <Box width={'85%'}>
            <Text style={form.normalText}>
              Ingrese el título del nuevo producto 
            </Text>
            <CustomInput
              control={control}
              // rules={element.required ? {required: 'Este campo es requerido'} : null}
              name={'title'}
            />
            <Divider style={form.divider}/>
            <Text style={form.normalText}>
              Ingrese una descripción del producto
            </Text>
            <CustomInput
              control={control}
              // rules={element.required ? {required: 'Este campo es requerido'} : null}
              name={'description'}
              isMultiline
            />
            <Divider style={form.divider}/>
            <Text style={form.normalText}>
              Ingrese el precio del producto
            </Text>
            <CustomInput
              control={control}
              // rules={element.required ? {required: 'Este campo es requerido'} : null}
              name={'price'}
              isNumeric
            />
            <Divider style={form.divider}/>
            <Text style={form.normalText}>
              Ingrese la cantidad en stock
            </Text>
            <CustomInput
              control={control}
              // rules={element.required ? {required: 'Este campo es requerido'} : null}
              name={'quantity'}
              isNumeric
            />
            <Divider style={form.divider}/>
            <TouchableOpacity style={{...general.rowMargin, marginBottom: 15}} onPress={handlePressImage}>
              <View style={{width:'15%'}}>
                <Ionicons name = {'image'} size={30} color={colors.primary} style={{marginTop: 10}}/>
              </View>
              <Text style={form.imageText}>
                Imagen del producto
            </Text>
            </TouchableOpacity>
            <View style={{marginBottom:30}}>
            <CustomButton
              text={'Crear Producto'}
              color={colors.primary}
              radius={10}
              width={'100%'}
              onPress={handleSubmit(onSubmit, onError)}
            />
            </View>
          </Box>
        </Center>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AddProductScreen;