/**
 * Componente HomeBox
 * @author Davi Souto
 * @since  14/08/2018
 */

import React, { Component } from 'react';
import { View, Animated, Easing, Dimensions, Text } from 'react-native';

import styles from './styles';

export default class ScrollPhotoIndicator extends Component {

  static defaultProps = {
    color: "#3498DB",
    count: 1,
    position: 0,
    durationAnimation: 125,
    width: Dimensions.get('window').width
    // onPress: () => {}
  };

  //////////////////////////////////////////////////////////

  constructor () {
    super();
    this.indicatorValue = new Animated.Value(0);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.position !== this.props.position) {
      // Mover indicador
      this.indicatorMove(this.props.position);
    }
  }

  // Mover e animar indicador da lista de imagens
  indicatorMove(position){
    // Calcular posição do indicador
    toLeft = (this.props.width / this.props.count) * position;

    Animated.timing(
      this.indicatorValue,
      {
        toValue: toLeft,
        duration: this.props.durationAnimation,
        easing: Easing.in
      }
    ).start();
  }

  //////////////////////////////////////////////////////////

  render() {
    return (
      <View style={ [styles.indicatorBar, { width: this.props.width }] }>
        <Animated.View style={{
            backgroundColor: this.props.color,
            flexGrow: (1 / this.props.count),
            left: this.indicatorValue
          }}
        />
      </View>
    );
  }
}
