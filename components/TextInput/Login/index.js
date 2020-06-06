/**
 * Componente TextInputLogin
 * @author Davi Souto
 * @since  07/08/2018
 */

import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';

export default class TextInputLogin extends Component {

  static defaultProps = {
    text: "",
    inputProps: { }
  };

  ////////////////////////////////////////////////////////

  render() {
    return (
      <View style={ styles.inputContainer }>
        <Text style={ styles.text }>{ this.props.text.toUpperCase() }</Text>
        <TextInput
          style={ styles.input }
          editable={ true }
          selectionColor="#666"
          placeholderTextColor="#eee"
          spellCheck={ false }
          underlineColorAndroid="transparent"
          { ...this.props.inputProps }
          //
        />
      </View>
    );
  }
}
