import { StyleSheet } from 'react-native';
import { colors } from './colors';

export default StyleSheet.create({
    card: {
        borderWidth: 0.5,
        borderColor: '#DAE0E6',
        padding: 10,
        backgroundColor: '#FFFFFF',
        width: '95%',
        marginBottom:15
    },
    smallCard: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: colors.primaryTransparent,
        marginRight: 10
    }
})