import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: '#222'
  },
  notificationScroll: {
    // backgroundColor: '#eee',
    alignSelf: 'stretch',
    paddingHorizontal: 12
  },
  notificationScrollContent: {
    alignItems: 'center',
  },
  notificationBox: {
    width: '80%',
    paddingVertical: 22,
    paddingHorizontal: 11,
    backgroundColor: 'white',
    marginTop: 16,
    borderRadius: 3,
    alignItems: 'center'
  },
  notificationText: {
    color: '#444',
    textAlign: 'center'
  }
});

export default styles;
