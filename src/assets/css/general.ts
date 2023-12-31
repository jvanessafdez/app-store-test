import { StyleSheet } from 'react-native';
import { colors } from './colors';

export default StyleSheet.create({
// Layout
col: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  rowSpace: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowSpace2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerHorizontal: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  centerVertical: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  },

  // Margins
  marginBottom: {
    marginBottom: 10,
  },
  marginBottom20: {
    marginBottom: 20,
  },
  marginStart: {
    marginStart: '5%',
  },
  marginRight5: {
    marginRight: 5,
  },
  marginRight10: {
    marginRight: 10,
  },
  marginLeft20: {
    marginLeft: 20,
  },
  marginTop: {
    marginTop: 10,
  },
  rowMargin: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Typography
  normalText: {
    color: '#49556D',
    width: '100%',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '90%',
    marginEnd: 10,
    color: '#000000',
    marginBottom:15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    color:'#000'
  },
  titleCard: {
    fontSize: 18,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    color: colors.primary
  },
  quantity: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign:'center',
    marginTop:10
  },

  // Screen
  screen: {
    backgroundColor: '#ffffff',
    flex: 1,
    height:'100%'
  },

  //Image
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  detail: {
    width: '100%',
    height: '80%',
    resizeMode: 'stretch',
    alignSelf: 'center'
  }
});