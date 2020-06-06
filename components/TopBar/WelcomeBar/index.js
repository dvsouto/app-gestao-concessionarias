/**
 * Componente WelcomeBar
 * @author Davi Souto
 * @since  10/08/2018
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doLogout } from 'AppGestao/components/Redux/Actions/AuthActions';

import TopBar from 'AppGestao/components/TopBar';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class WelcomeBar extends Component {

  /**
   * Efeguar logout
   */
  doConfirmLogout(){
    Alert.alert(
      'Logout',
      'Deseja realmente efetuar o logout ?',
      [
        { text: 'Cancelar', onPress: () => false, style: 'cancel' },
        { text: 'Sair', onPress: () => this.doLogout(), style: 'default' },
      ],
      { cancelable: true }
    )
  }

  doLogout(){
    this.props.doLogout();
    this.props.navigation.navigate('Auth');
  }

  /////////////////////////////////////////////////////

  render() {
    if (! this.props.session)
      return (<View></View>);

    return (
      <TopBar>
        <View style={ styles.welcome_text_view }>
          <Text style={ styles.welcome_text }>
            Bem vindo, <Text style={ styles.name_text }>{ this.props.session.nome.toUpperCase() }</Text> !
          </Text>
        </View>

        <View style={ styles.logout_view }>
          <TouchableOpacity
            style={ styles.logout_button }
            onPress={ this.doConfirmLogout.bind(this) }
          >
            <Icon name="sign-out" size={20} color="#444" style={{ paddingLeft: 3 }} />
          </TouchableOpacity>
        </View>
      </TopBar>
    );
  }
}

///////////////////////////////////////////////////////////////////////////

const mapStateToProps = store => ({
  session: store.authState.session
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ doLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeBar);
