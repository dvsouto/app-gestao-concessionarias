/**
 * Gestão de Concessionária - App.js
 * @author Davi Souto
 * @since  01/08/2018
 */

import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Text, YellowBox } from 'react-native';

import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import { Provider } from 'react-redux';
import Store from 'AppGestao/components/Redux/Store';
import { getPersistedData, setPersistedData } from 'AppGestao/components/Redux/Actions/AuthActions';

import Navigator from './components/Navigator';
import NavigationService from './components/Navigator/NavigationService';

import { AsyncStorage } from "react-native";

export default class AppContainer extends Component {
  state = {
    appIsReady: false,
  };

  /**
   * Não exibir warnings de require cycle
   */
  muteWarnings() {
    YellowBox.ignoreWarnings([
      'Require cycle:',
      'Module RCTBluetoothSerial',
      'ImageStore is deprecated',
    ]);
  }

  async _loadResourcesAsync() {
    await Font.loadAsync({
      'open-sans': require('AppGestao/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('AppGestao/fonts/OpenSans-Bold.ttf'),
      'roboto': require('AppGestao/fonts/Roboto-Regular.ttf'),
      'roboto-bold': require('AppGestao/fonts/Roboto-Bold.ttf'),
      'roboto-light': require('AppGestao/fonts/Roboto-Light.ttf'),
      // 'roboto-thin': require('AppGestao/fonts/Roboto-Thin.ttf')
    });

    let session = false;
    let token = false;
    let email = "";

    await AsyncStorage.getItem("@authReducer:form_login.cod_acesso").then(function(_cod_acesso){
      email = _cod_acesso;
    });

    await AsyncStorage.getItem("@session").then(function(_session){
      if (_session)
        _session = JSON.parse(_session);

      session = _session;
    });

    await AsyncStorage.getItem("@token").then(function(_token){
      token = _token;
    });

    Store.dispatch(setPersistedData({
      cod_acesso: email,
      session: session,
      token: token,
    }));
  }

  finishedLoading()
  {
    // console.log("session");
    // console.log(Store.getState().authState.session);
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    Text.defaultProps.style = {
      fontFamily: 'roboto',
      color: '#444',
    };

    this.setState({ appIsReady: true });
  }

  constructor(props){
    super(props);

    this.muteWarnings();
  }

  // Recuperar dados salvos localmente
  // componentDidMount() {
    // Store.dispatch(getPersistedData());
  // }

  render() {
    if (!this.state.appIsReady) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onFinish={ this.finishedLoading.bind(this) }
          onError={console.warn}
        />
      );
    }

    return (
      <Provider store={ Store }>
        <Navigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  }
}
