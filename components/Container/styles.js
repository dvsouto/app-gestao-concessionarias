import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    paddingTop: Platform.select({ ios: 20, android: 0 }),
    position: "relative",
    flexDirection: "column",
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: "space-around",
    // justifyContent: 'flex-end',
  }
});

export default styles;
