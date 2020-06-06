/**
 * Componente ButtonRectangle
 * Um botão que oculpa toda a view
 * @author Davi Souto
 * @since  08/08/2018
 */

import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class ButtonDefault extends Component {

  static defaultProps = {
    text: false,
    style: {}
  };

  ////////////////////////////////////////////////////////

  render() {
    return (
      <TouchableOpacity
        style={ [ styles.buttonRectangle, this.props.style ] }
        activeOpacity={ 0.6 }
        onPress={ this.props.onPress }
      >
        {
          this.props.text ? ( <Text style={ styles.text }>{ this.props.text }</Text> ) : this.props.children
        }
      </TouchableOpacity>
    );
  }
}
