/**
 * Componente de Loading
 * @author Davi Souto
 * @since  20/12/2018
 */

import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default class LoadingIndicator extends Component {
  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <ActivityIndicator size="large" color="#3498DB" />
      </View>
    );
  }
}
