import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  buttonRectangle: {
    padding: 12,
    backgroundColor: '#444',
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: "center",
    borderWidth: 3,
    borderColor: '#666',
    borderRadius: 6
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontFamily: "open-sans-bold",
    fontSize: 16
  }
});

export default styles;
