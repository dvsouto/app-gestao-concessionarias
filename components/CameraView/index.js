import React from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { ScreenOrientation } from 'expo';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class CameraView extends React.Component {
  static defaultProps: {
    onClose: () => {},
    onImageReceive: (image) => {},
    angle: "Interior"
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  camera = null;

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });

    if (Platform.OS == 'android')
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
    else
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }

  componentWillUnmount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  }

  switchCamera() {
    this.setState({
      type: this.state.type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back,
    });
  }

  takePicture = async() => {
    console.log("takePicture() - 1");

    if (this.camera) {
      console.log("takePicture() - 2");

      this.camera.takePictureAsync({
        quality: 0.75
      }).then((photo) => {
        console.log("takePicture() - 3");

        this.props.onImageReceive(photo);
        this.props.onClose();
      }).catch((err) => {
        console.log("Erro ao capturar imagem: " + err)
        this.props.onClose();
      });
    }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View style={ styles.waitCameraContainer } />;
    } else if (hasCameraPermission === false) {
      return <Text>Sem acesso a câmera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera ref={ (ref) => { this.camera = ref }} style={ styles.camera } type={ this.state.type }>
            <View style={ styles.cameraContainer }>
              <View style={ styles.topCamera }>
                <View style={ styles.viewButtonCancelar }>
                  <TouchableOpacity onPress={ this.props.onClose.bind(this) } style={ styles.buttonCancelar }>
                    <Icon size={ 26 } name={ 'times' } color={ '#ffffff' } />
                  </TouchableOpacity>
                </View>

                <View style={ styles.viewButtonSwitch }>
                  <TouchableOpacity onPress={ this.switchCamera.bind(this) } style={ styles.buttonSwitch }>
                    <Icon size={ 26 } name={ 'camera' } color={ '#ffffff' } />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={ styles.centerCamera }>
              </View>

              <View style={ styles.bottomCamera }>
                <View style={ styles.viewTextAngle }>
                  <Text style={ styles.textAngle }>Interior</Text>
                </View>

                <View style={ styles.viewButtonTakePicture }>
                  <TouchableOpacity onPress={ this.takePicture.bind(this) } style={ styles.buttonTakePicture }>
                    <Icon size={ 90 } name={ 'circle-thin' } color={ '#ffffff' } />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
