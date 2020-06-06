import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  camera: {
    flex: 1
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },
  waitCameraContainer: {
    flex: 1,
    backgroundColor: 'black'
  },

  topCamera: {
    flex: 0.3,
    flexDirection: 'row'
  },
  centerCamera: {
    flex: 0.4,
    alignItems: 'center',
    flexDirection: 'row'
  },
  bottomCamera: {
    flex: 0.3,
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },

  viewButtonCancelar: {
    flex: 0.5
  },
  buttonCancelar: {
    padding: 14
  },
  viewButtonSwitch: {
    flex: 0.5,
  },
  buttonSwitch: {
    padding: 14,
    alignSelf: 'flex-end'
  },

  viewTextAngle: {
    flex: 0.5,
    justifyContent: 'flex-end'
  },
  textAngle: {
    fontSize: 16,
    fontFamily: 'open-sans',
    color: 'white',
    opacity: 0.8,
    padding: 12,
  },
  viewButtonTakePicture: {
    flex: 0.5
  },
  buttonTakePicture: {
    paddingRight: 22,
    paddingBottom: 12,
    alignSelf: 'flex-end'
  }
});

export default styles;
