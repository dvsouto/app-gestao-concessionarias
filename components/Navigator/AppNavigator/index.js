/**
 * App Navigator
 * @author Davi Souto
 * @since  08/08/2018
 */

import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

import navigatorTabs from './navigatorTabs'

//////////////////////////////////////////////////////////

const tabBarOptions = {
  activeBackgroundColor: "#3498DB",
  activeTintColor: "#FFFFFF",
  inactiveBackgroundColor: "#444444",
  inactiveTintColor: '#EEEEEE',
  labelStyle: {
    fontSize: 15,
    fontFamily: 'open-sans-bold'
  },
  tabStyle: {
    paddingBottom: 4
  },
  style: {
    height: 72,
    borderTopColor: "#fff",
    borderTopWidth: 4
  }
}

const _navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state;
  const icon = navigatorTabs[routeName].icon || "";
  const title = navigatorTabs[routeName].title || routeName;

  return {
    tabBarIcon: ({ focused, tintColor }) => {
      return (<Icon name={ icon } size={22} focused={ focused } color={ tintColor } style={{ paddingTop: 5 }} />);
    },
    title: title
  };
}

//////////////////////////////////////////////////////////

// Navigator da aplicação
const AppNavigator = createBottomTabNavigator(
  navigatorTabs,
  {
    navigationOptions: _navigationOptions,
    tabBarOptions,
    animationEnabled: true,
    swipeEnabled: true,
    lazy: true,
    initialRouteName: 'Home'
  }
);

export default AppNavigator;
