import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  veicleDetailsBox: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 14,
    marginBottom: 12,
    marginHorizontal: 22,
    backgroundColor: '#999',
    borderRadius: 12,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  rowDetail: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8
  },
  columnDetail: {
    flexDirection: 'column',
    // backgroundColor: 'blue',
    alignSelf: 'stretch',
    flex: 1,
  },
  titleText: {
    fontSize: 14,
    fontFamily: 'roboto-bold',
    color: '#f9f9f9',
    alignSelf: 'center',
    // marginRight: 4,
    marginBottom: 3
  },
  valueText: {
    fontSize: 14,
    fontFamily: 'roboto',
    color: '#f9f9f9',
    alignSelf: 'center'
  },
  titleBoxText: {
    fontSize: 16,
    color: '#fff',
  }
});

export default styles;
