import { StyleSheet } from 'react-native';
import { colors } from './colors';


export default StyleSheet.create({
    divider:{
        backgroundColor:'#DAE0E6',
        marginBottom:20,
        // borderWidth:1,
        borderColor: '#DAE0E6'
    },
    normalText: {
        color: colors.text
    },
    imageText: {
        color: colors.primary,
        size: 20,
        width:'85%'
    }

})