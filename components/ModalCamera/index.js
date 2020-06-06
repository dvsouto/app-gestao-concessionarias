/**
 * Componente ModalCamera
 * @author Davi Souto
 * @since  07/08/2018
 */

import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import ButtonDefault from 'AppGestao/components/Button/Default';
import CameraView from 'AppGestao/components/CameraView';

import styles from './styles';

export default class Container extends Component {
  static defaultProps = {
    modalVisible: false,
    setModalVisible: (visible) => {},
    onImageReceive: (image) => {},
    onRemoveImage: () => {},
    hasImage: false,
  };

  constructor(props){
    super(props);

    this.state = { image: false, cameraVisible: false };
  }

  _pickImage = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status === 'granted') {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [16, 9],
      });

      console.log(result);

      if (!result.cancelled)
        this.props.onImageReceive(result);

      this.props.setModalVisible(false);
    } else {
      this.props.setModalVisible(false);
      throw new Error('Permissão de acesso as fotos requerida');
    }


  };

  onPressCameraButton(){
    this.setState({ cameraVisible: true });
  }

  onCloseCamera(){
    this.setState({ cameraVisible: false });

    setTimeout(() => this.props.setModalVisible(false), 300);
  }

  removeImage(){
    this.props.onRemoveImage();

    setTimeout(() => this.props.setModalVisible(false), 10);
  }

  ///////////////////////////////////////////////////

  render() {
    return (
      <Modal
        animationType={ "fade" }
        transparent={ true }
        visible={ this.props.modalVisible }
        onRequestClose={ () => this.props.setModalVisible(false) }
        supportedOrientations={ ['portrait'] }
      >
        <View style={ styles.modalContainer }>
          <ButtonDefault
            size={ 'SMALL' }
            color={ 'DARK' }
            text={ 'Câmera' }
            style={{ marginBottom: 12 }}
            onPress={ this.onPressCameraButton.bind(this) }
          />

          <ButtonDefault
            size={ 'SMALL' }
            color={ 'DARK' }
            text={ 'Biblioteca' }
            style={{ marginBottom: 24 }}
            onPress={ this._pickImage.bind(this) }
          />

          {
            (this.props.hasImage)
            ?
              (
                <ButtonDefault
                  size={ 'SMALL' }
                  color={ 'DARK' }
                  text={ 'Remover Imagem' }
                  style={{ marginBottom: 24 }}
                  onPress={ this.removeImage.bind(this) }
                />
              )
            :
              false
          }

          <ButtonDefault
            size={ 'SMALL' }
            color={ 'DANGER' }
            text={ 'Cancelar' }
            onPress={ () => this.props.setModalVisible(false) }
          />

          <Modal
            animationType={ "slide" }
            transparent={ false }
            visible={ this.state.cameraVisible }
            onRequestClose={ this.onCloseCamera.bind(this) }
            supportedOrientations={ ['landscape'] }
          >
            <CameraView
              onClose={ this.onCloseCamera.bind(this) }
              onImageReceive={ this.props.onImageReceive.bind(this) }
            />
          </Modal>
       </View>
      </Modal>
    )
  }
}
