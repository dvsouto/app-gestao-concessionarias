/**
 * Loading Splash Screen
 * @author Davi Souto
 * @since  08/08/2018
 */

import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import Container from 'AppGestao/components/Container';
import LoadingIndicator from 'AppGestao/components/LoadingIndicator';

import styles from './styles';

export default class ScreenLoadingSplash extends Component {
  render() {
    return (
      <Container>
        {/* <Text>Loading...</Text> */}
        <LoadingIndicator />
      </Container>
    );
  }
}
