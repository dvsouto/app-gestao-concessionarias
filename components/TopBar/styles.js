import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  top_bar: {
    flex: 0,
    flexDirection: 'row',
    height: 72,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    paddingTop: Platform.select({ ios: 20, android: 0 }),
    borderBottomColor: '#eee',
    borderBottomWidth: 3
  },
  text: {
    fontFamily: 'roboto',
    fontSize: 15,
    color: '#666'
  },
  backButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    // left: 12,
    // top: 0 + Platform.select({ ios: 20, android: 0 }),
    // paddingTop: 0 + Platform.select({ ios: 20, android: 0 }),
    // paddingBottom: 12,
    paddingTop: Platform.select({ ios: 12, android: 0 }),
    paddingHorizontal: 12,
    justifyContent: 'center'
  }

});

export default styles;
