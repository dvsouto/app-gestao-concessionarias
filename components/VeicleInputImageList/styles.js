import { StyleSheet, Dimensions } from 'react-native';

boxWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    marginTop: 12,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    justifyContent: 'center',
    marginHorizontal: 0,
  },
  scrollBox: {
    flex: 0
  },
  scrollBoxContent: {
    flexGrow: 1,
    flexDirection: 'row'
  },
  imageBox: {
    height: 400,
    width: boxWidth,
  },
  veicleImage: {
    height: 220,
    width: boxWidth - 40,
    marginHorizontal: 20,
    borderWidth: 8,
    borderColor: "#333",
  },
  veicleImageAngle: {
    height: 52,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#333",
    top: -8
  },
  veicleImageAngleText: {
    fontFamily: 'open-sans-bold',
    fontSize: 19,
    textAlign: 'center',
    color: "#fff",
  },
  containerTitleList: {
    height: 52,
    width: '100%',
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22
  },
  containerTitleListText: {
    fontSize: 17,
    fontFamily: 'open-sans-bold',
    color: 'white',
    textAlign: 'center'
  }
});

export default styles;
