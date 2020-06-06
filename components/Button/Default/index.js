/**
 * Componente ButtonDefault
 * @author Davi Souto
 * @since  08/08/2018
 */

import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default class ButtonDefault extends Component {

  static defaultProps = {
    text: false,
    style: {},
    size: 'NORMAL',
    color: 'PRIMARY',
    roundness: 'NORMAL',
    buttonProps: {}
  };

  ///////////////////////////////////////////////////////

  // Tratar parametros de estilo e definir na variavel antes de renderizar
  componentWillMount(){
    // Button Size
    switch(this.props.size.toUpperCase())
    {
      case 'LARGE':
        this.buttonStyle.height = 84;
        this.buttonStyle.borderWidth = 6;
        this.buttonTextStyle.fontSize = 36;
      break;

      case 'SMALL':
        this.buttonStyle.height = 42;
        this.buttonStyle.borderWidth = 3;
        this.buttonTextStyle.fontSize = 11;
      break;

      case 'NORMAL':
      default:
        this.buttonStyle.height = 58;
        this.buttonStyle.borderWidth = 4;
        this.buttonTextStyle.fontSize = 16;
      break;
    }

    // Button color
    switch(this.props.color.toUpperCase())
    {
      case 'DARK':
        this.buttonStyle.backgroundColor = "#444";
        this.buttonStyle.borderColor = "#fff";
        this.buttonTextStyle.color = "#fff";
      break;

      case 'WHITE':
        this.buttonStyle.backgroundColor = "#fff";
        this.buttonStyle.borderColor = "#eee";
        this.buttonTextStyle.color = "#999";
      break;

      case 'DANGER':
        this.buttonStyle.backgroundColor = "#d9534f";
        this.buttonStyle.borderColor = "#fff";
        this.buttonTextStyle.color = "#fff";
      break;

      case 'SUCCESS':
        this.buttonStyle.backgroundColor = "#5cb85c";
        this.buttonStyle.borderColor = "#fff";
        this.buttonTextStyle.color = "#fff";
      break;

      case 'WARNING':
        this.buttonStyle.backgroundColor = "#f0ad4e";
        this.buttonStyle.borderColor = "#fff";
        this.buttonTextStyle.color = "#fff";
      break;

      case 'LINK':
        this.buttonStyle.backgroundColor = "transparent";
        this.buttonStyle.borderColor = "transparent";
        this.buttonStyle.borderWidth = 0;
        this.buttonTextStyle.color = "#3498DB";
      break;

      case 'DARKLINK':
        this.buttonStyle.backgroundColor = "transparent";
        this.buttonStyle.borderColor = "transparent";
        this.buttonStyle.borderWidth = 0;
        this.buttonTextStyle.color = "#777";
      break;

      case 'PRIMARY':
      case 'DEFAULT':
      default:
        this.buttonStyle.backgroundColor = "#3498DB";
        this.buttonStyle.borderColor = "#fff";
        this.buttonTextStyle.color = "#fff";
      break;
    }

    // Button roundness
    switch(this.props.roundness.toUpperCase())
    {
      case 'STRONG':
        this.buttonStyle.borderRadius = 76;
      break;

      case 'LOW':
        this.buttonStyle.borderRadius = 6;
      break;

      case 'NORMAL':
      default:
        this.buttonStyle.borderRadius = 26;
      break;
    }
  }

  // Estilos pré-definidos
  buttonStyle = {};
  buttonTextStyle = {}

  ///////////////////////////////////////////////////////

  render() {
    return (
      <TouchableOpacity
        style={ [ styles.buttonDefault, this.buttonStyle, this.props.style ] }
        activeOpacity={ 0.6 }
        onPress={ this.props.onPress }
        { ...this.props.buttonProps }
      >
        {
          this.props.text ? ( <Text style={ [ styles.text, this.buttonTextStyle ] }>{ this.props.text }</Text> ) : this.props.children
        }
      </TouchableOpacity>
    );
  }
}
