/**
 * Navigator Stock
 * Contém as telas de estoque
 * @author Davi Souto
 * @since  15/08/2018
 */

import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// Screens
import ScreenStock from 'AppGestao/components/Screens/Stock';
import ScreenVeicleDetails from 'AppGestao/components/Screens/VeicleDetails';
import ScreenNewVeicle from 'AppGestao/components/Screens/NewVeicle';


/////////////////////////////////////////////////////////////////

// Navigator de autenticação
const StockNavigator = createStackNavigator({
  Stock: {
    title: 'Estoque',
    screen: ScreenStock,
  },
  VeicleDetails: {
    title: 'Detalhes',
    screen: ScreenVeicleDetails,
  },
  AddVeicle: {
    title: 'Adicionar Veículo',
    screen: ScreenNewVeicle
  }
}, {
  initialRouteName: 'Stock',
  navigationOptions: {
  },
  headerMode: 'none',
  // mode: 'modal',
  animationEnabled: true
});

export default StockNavigator;
