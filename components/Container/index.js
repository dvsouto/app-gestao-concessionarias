/**
 * Componente Container
 * @author Davi Souto
 * @since  07/08/2018
 */

import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import styles from './styles';

export default class Container extends Component {
  static defaultProps = {
    autoPaddingIOS: true, // Definir padding da statusbar do iOS automaticamente
    scroll: true, // Definir como ScrollView
    style: {}
  };

  autoPaddingStyle = {};

  constructor(props){
    super(props);

    if (! this.props.autoPaddingIOS)
    {
      this.autoPaddingStyle = {
        paddingTop: 0
      };
    }
  }

  ///////////////////////////////////////////////////

  render() {
    if (this.props.scroll)
    {
      return (
        <ScrollView
          style={ [styles.container, this.autoPaddingStyle, this.props.style] }
          contentContainerStyle={ styles.contentContainer }
          alwaysBounceVertical={false}
        >
          { this.props.children }
        </ScrollView>
      );
    } else
    {
      return (
        <View style={ [styles.container, styles.contentContainer, this.autoPaddingStyle, this.props.style] }>
          { this.props.children }
        </View>
      )
    }
  }
}
