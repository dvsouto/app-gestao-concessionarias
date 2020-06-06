/**
 * Navigator Auth
 * Contém as telas de autenticação
 * @author Davi Souto
 * @since  08/08/2018
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// Screens
import ScreenAuthenticate from 'AppGestao/components/Screens/Authenticate';

/////////////////////////////////////////////////////////////////

// Navigator de autenticação
const AuthNavigator = createStackNavigator({
  SignIn: {
    title: 'Authenticate',
    screen: ScreenAuthenticate,
  }
}, {
  initialRouteName: 'SignIn',
  navigationOptions: {
  },
  headerMode: 'none',
  mode: 'modal',
  animationEnabled: true
});

export default AuthNavigator;
