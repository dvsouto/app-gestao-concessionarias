/**
 * Componente HomeBox
 * @author Davi Souto
 * @since  14/08/2018
 */

import React, { Component } from 'react';
import { ScrollView, View, TouchableWithoutFeedback, Image, Text, Dimensions } from 'react-native';

import ScrollPhotoIndicator from 'AppGestao/components/ScrollPhotoIndicator';

import styles from './styles';

export default class HomeBox extends Component {

  static defaultProps = {
    onPress: () => {}
  };

  addVeicleImage = require("AppGestao/assets/images/no-camera.png");
  width = Dimensions.get('window').width - 40;

  ////////////////////////////////////////////////////////////

  constructor(props){
    super(props);

    this.state = { position: 0 };
  }

  // Recuperar posicao da lista de imagens
  handleScroll(event){
    let position = Math.round(event.nativeEvent.contentOffset.x / this.width);
    if (position < 0) position = 0;

    if (position != this.state.position)
      this.setState({ position });
  }

  ////////////////////////////////////////////////////////////

  render() {
    return (
      <View style={ styles.veicleBox }>
        <ScrollView
          style={ styles.veicleImageScrollList }
          contentContainerStyle={ styles.veicleImageScrollListContent }
          horizontal={ true }
          alwaysBounceHorizontal={ false }
          showsHorizontalScrollIndicator={false}
          snapToAlignment={"center"}
          pagingEnabled={ true }
          onScroll={ this.handleScroll.bind(this) }
          scrollEventThrottle={ 256 }
        >
          {
            Object.keys(this.props.veicle.imagens).map( (veicleImageKey, key) => {
              let veicleImage = this.props.veicle.imagens[veicleImageKey];
              let veicleImageSource = {};

              if (veicleImage.imagem) veicleImageSource = { uri: veicleImage.imagem };
              else veicleImageSource = this.addVeicleImage;

              return (
                <TouchableWithoutFeedback key={ key } onPress={ this.props.onPress }>
                <Image
                  style={ styles.veicleImage }
                  source={ veicleImageSource }
                />
                </TouchableWithoutFeedback>
              );
            })
          }
        </ScrollView>

        <ScrollPhotoIndicator
          count={ this.props.veicle.imagensCount }
          position={ this.state.position }
          width={ this.width }
        />

        <TouchableWithoutFeedback onPress={ this.props.onPress }>
          <View style={ styles.dataVeicleView }>
            <Text style={ styles.textVeicleModel }>{ this.props.veicle.marca.toUpperCase() } { this.props.veicle.modelo.toUpperCase() }</Text>
            <Text style={ styles.textVeicleInfo }>3.3 MPFI GLS SEDAN V6 24V GASOLINA 4P AUTOMATICO</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
