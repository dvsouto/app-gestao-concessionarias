import { StyleSheet, Dimensions } from 'react-native';

boxMarginHorizontal = 18;

boxBorderRadius = 6;
boxBorderWidth = 2;
boxBorderColor = '#fff';

boxWidth = Dimensions.get('window').width - (boxMarginHorizontal * 2);
boxImageBorderRadius = boxBorderRadius - 2;

const styles = StyleSheet.create({
  veicleBox: {
    flex: 1,
    alignSelf: 'stretch',
    marginVertical: 18,
    backgroundColor: '#fff',
    borderWidth: boxBorderWidth,
    borderColor: boxBorderColor,
    borderRadius: boxBorderRadius,
    justifyContent: 'center',
    marginHorizontal: boxMarginHorizontal
  },
  veicleImageScrollList: {
    height: 168,
    width: boxWidth - (boxBorderWidth * 2),
    flex: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: boxImageBorderRadius,
    borderTopRightRadius: boxImageBorderRadius
  },
  veicleImageScrollListContent: {
    flexGrow: 1, 
    flexDirection: 'row'
  },
  veicleImage: {
    height: '100%',
    width: boxWidth - (boxBorderWidth * 2)
  },
  dataVeicleView: {
    height: 62,
    backgroundColor: '#f9f9f9',
    // alignItems: 'center',
    padding: 8
  },
  textVeicleModel: {
    fontSize: 16,
    fontFamily: 'open-sans-bold',
    color: '#777'
  },
  textVeicleInfo: {
    fontSize: 12,
    fontFamily: 'open-sans',
    color: '#888'
  }
});

export default styles;
