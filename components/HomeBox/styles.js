import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  homeBox: {
    marginTop: 12,
    marginBottom: 16,
    flex: 1,
    alignSelf: 'stretch'
  },
  rowBox: {
    flexDirection: 'row',
    flexGrow: 1
  },
  columnBox: {
    flexDirection: 'column',
    backgroundColor: '#888',
    marginHorizontal: 6,
    marginVertical: 6,
    flex: 0.5,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 4,
    paddingVertical: 6
  },
  titleText: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    fontSize: 16,
  },
  valueText: {
    color: 'white',
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    fontSize: 36
  }
});

export default styles;
