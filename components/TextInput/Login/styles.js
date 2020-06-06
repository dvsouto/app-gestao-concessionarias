import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 36
  },
  input: {
    height: 46,
    width: "80%",
    backgroundColor: "white",
    borderColor: "#E8E8E8",
    borderWidth: 3,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 4,
    fontFamily: "roboto-light",
    color: "#444",
    fontSize: 17,
    textAlign: "center"
  },
  text: {
    fontSize: 28,
    color: "#A2A2A2",
    marginBottom: 3,
    fontWeight: "bold",
    fontFamily: "open-sans-bold"
  }
});

export default styles;
