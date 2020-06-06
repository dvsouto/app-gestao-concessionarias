/**
 * Componente VeicleDetailsBox
 * @author Davi Souto
 * @since  15/08/2018
 */

import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableWithoutFeedback, Image, Dimensions, Animated, Easing } from 'react-native';

import styles from './styles';

import ScrollPhotoIndicator from 'AppGestao/components/ScrollPhotoIndicator';

export default class VeicleInputImageList extends Component {

  static defaultProps = {
    onPressImage: (veicle, image_angle) => {}
  }

  constructor(props) {
    super(props);

    this.state = { position: 0 };
  }

  width = Dimensions.get('window').width;
  addVeicleImage = require("AppGestao/assets/images/no-camera.png");

  // Recuperar posicao da lista de imagens
  handleScroll(event){
    let position = Math.round(event.nativeEvent.contentOffset.x / this.width);
    if (position < 0) position = 0;

    if (position != this.state.position)
      this.setState({ position });
  }

  ////////////////////////////////////////////////////////////////////////

  render() {
    const veicle = this.props.veicle;

    return (
      <View style={ styles.containerList }>
        <View style={ styles.containerTitleList }>
          <Text style={ styles.containerTitleListText }>FOTOS</Text>
        </View>

        <ScrollView
          style={ styles.scrollBox }
          contentContainerStyle={ styles.scrollBoxContent }
          horizontal={ true }
          alwaysBounceHorizontal={ false }
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"center"}
          pagingEnabled={ true }
          onScroll={ this.handleScroll.bind(this) }
          scrollEventThrottle={ 256 }
        >
          {
            Object.keys(veicle.imagens).map( (veicleImageKey, key) => {
              let veicleImage = veicle.imagens[veicleImageKey];
              let showImage = false;

              if (veicleImage.imagem)
              {
                showImage = (
                  <Image
                    style={ styles.veicleImage }
                    source={{ uri: veicleImage.imagem }}
                  />
                );
              } else {
                showImage = (
                  <Image
                    style={ [styles.veicleImage, { height: 220 }] }
                    source={ this.addVeicleImage }
                    resizeMode={ 'center' }
                  />
                );
              }

              return (
                <TouchableWithoutFeedback key={ key } onPress={ this.props.onPress }>
                  <View>
                    <TouchableWithoutFeedback onPress={ () => { this.props.onPressImage(veicle, veicleImageKey, (veicleImage.imagem ? true : false)) } }>
                      { showImage }
                    </TouchableWithoutFeedback>

                    <View style={ styles.veicleImageAngle }>
                      <Text style={ styles.veicleImageAngleText }>{ veicleImage.label }</Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              );
            })
          }
        </ScrollView>

        <ScrollPhotoIndicator count={ veicle.imagensCount } position={ this.state.position } />
      </View>
    );
  }
}
