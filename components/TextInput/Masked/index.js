/**
 * Componente TextInputMasked
 * @author Davi Souto
 * @since  03/11/2018
 */

import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

export default class TextInputMasked extends Component {

  static defaultProps = {
    text: "",
    inputProps: { },
    styleContainer: {},
    mask: false
  };

  ////////////////////////////////////////////////////////

  render() {
    return (
      <View style={ [styles.inputContainer, this.props.styleContainer] }>
        <Text style={ styles.text }>{ this.props.text.toUpperCase() }</Text>
        <TextInput
          style={ styles.input }
          editable={ true }
          selectionColor="#666"
          placeholderTextColor="#eee"
          spellCheck={ false }
          underlineColorAndroid="transparent"
          { ...this.props.inputProps }
        />
      </View>
    );
  }
}
