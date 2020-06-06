import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  veicleDetailsBox: {
    flex: 1,
    padding: 16,
    marginTop: 8,
    marginBottom: 12,
    marginHorizontal: 22,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingHorizontal: 12,
    paddingVertical: 14,
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
    color: '#777',
    alignSelf: 'center',
    // marginRight: 4,
    marginBottom: 3
  },
  valueText: {
    fontSize: 14,
    fontFamily: 'roboto',
    color: '#777',
    alignSelf: 'center'
  },
  titleBoxText: {
    fontSize: 16,
    color: '#666',
  }
});

export default styles;
