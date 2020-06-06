/**
 * Componente HomeBox
 * @author Davi Souto
 * @since  14/08/2018
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class HomeBox extends Component {
  render() {
    return (
      <View style={ styles.homeBox }>
        <View style={ styles.rowBox }>
          <View style={ styles.columnBox }>
            <Text style={ styles.titleText }>EM ESTOQUE</Text>
            <Text style={ styles.valueText }>32</Text>
          </View>

          <View style={ styles.columnBox }>
            <Text style={ styles.titleText }>VENDIDOS</Text>
            <Text style={ styles.valueText }>26</Text>
          </View>
        </View>

        <View style={ styles.rowBox }>
          <View style={ styles.columnBox }>
            <Text style={ styles.titleText }>LOREM IPSUM</Text>
            <Text style={ styles.valueText }>921</Text>
          </View>

          <View style={ styles.columnBox }>
            <Text style={ styles.titleText }>DOLOR SIT</Text>
            <Text style={ styles.valueText }>642</Text>
          </View>
        </View>
      </View>
    );
  }
}
