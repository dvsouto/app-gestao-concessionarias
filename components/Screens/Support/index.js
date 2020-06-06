/**
 * Tela de estoque
 * @author Davi Souto
 * @since  13/08/2018
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Linking } from 'expo';

import Container from 'AppGestao/components/Container';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default class ScreenSupport extends Component {
  static defaultProps = {
    whatsapp: "(11) 99999-9999",
  };

  constructor(props) {
    super(props);
  }

  onPressWhatsapp(){
    whatsapp_number = "+55" + this.props.whatsapp.replace(/[^0-9]*/g, "");

    Linking.openURL('whatsapp://send?text=&phone=' + whatsapp_number)
  }

  render() {
    return (
      <Container scroll={ false } autoPaddingIOS={ true }>
        <View style={ styles.viewSupport }>
          <Icon style={ styles.icon_whatsapp } name="logo-whatsapp" size={ 32 } color="#23cf23" />
          <View style={ styles.viewWhatsappNumber }>
            <Text style={ styles.title_whatsapp }>Whatsapp</Text>
            <TouchableOpacity onPress={ this.onPressWhatsapp.bind(this) }>
              <Text style={ styles.value_whatsapp }>{ this.props.whatsapp }</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}
