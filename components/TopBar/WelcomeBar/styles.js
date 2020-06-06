import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  welcome_text: {
    fontFamily: 'roboto',
    fontSize: 17,
    color: '#666',
    paddingLeft: 20
  },
  name_text: {
    fontWeight: 'bold',
    fontFamily: 'roboto-bold'
  },
  welcome_text_view: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout_view: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout_button: {
    width: 36,
    height: 28,
    backgroundColor: "#eee",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  }

});

export default styles;
