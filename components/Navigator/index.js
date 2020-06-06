/**
 * Navigator Router
 * @author Davi Souto
 * @since  02/08/2018
 */

import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

import ScreenAuthenticate from './../Screens/Authenticate';

/////////////////////////////////////////////////////////////////

export default createSwitchNavigator(
  {
    // AuthLoading: AuthLoadingScreen,
    Auth: AuthNavigator,
    App: AppNavigator,
  },
  {
    initialRouteName: 'Auth',
  }
);
