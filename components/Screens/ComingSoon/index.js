/**
 * Tela de estoque
 * @author Davi Souto
 * @since  13/08/2018
 */

import React, { Component } from 'react';
import { Text } from 'react-native';

import Container from 'AppGestao/components/Container';

import styles from './styles';

export default class ScreenComingSoon extends Component {
  render() {
    return (
      <Container scroll={ false } autoPaddingIOS={ true }>
        <Text style={ styles.comingSoon }>Em{'\n'}Breve</Text>
      </Container>
    );
  }
}
