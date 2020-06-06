/**
 * Componente TopBar
 * @author Davi Souto
 * @since  14/08/2018
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class TopBar extends Component {
  static defaultProps = {
    text: false,
    style: {},
    textStyle: {},
    showBackButton: false
  };

  doBackNavigator(){
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={ [ styles.top_bar, this.props.style ] }>
        {
          this.props.showBackButton
          ?
            (
              <TouchableOpacity style={ styles.backButton } onPress={ this.doBackNavigator.bind(this) }>
                <Icon name={ 'angle-left' } size={ 38 } color={ '#3498DB' } />
              </TouchableOpacity>
            )
          :
            false
        }

        {
          this.props.text ? ( <Text style={ [ styles.text, this.props.textStyle ] }>{ this.props.text.toUpperCase() }</Text> ) : this.props.children
        }
      </View>
    );
  }
}
