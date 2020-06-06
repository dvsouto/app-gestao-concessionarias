/**
 * Componente StockVeicleDetailBox
 * @author Davi Souto
 * @since  15/08/2018
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class StockVeicleDetailBox extends Component {

  render() {
    const stockDetail = this.props.stockDetail;

    return (
      <View style={ styles.veicleDetailsBox }>
        <View style={ [styles.rowDetail] }>
          <View style={ styles.columnDetail }>
            <Text style={ [styles.titleText, styles.titleBoxText] }>Detalhes do Estoque</Text>
          </View>
        </View>

        <View style={ styles.rowDetail }>
          <View style={ styles.columnDetail }>
            <Text style={ styles.titleText }>Criado por</Text>
            <Text style={ styles.valueText }>{ stockDetail.criado_por }</Text>
          </View>

          <View style={ styles.columnDetail }>
            <Text style={ styles.titleText }>Criado em</Text>
            <Text style={ styles.valueText }>{ stockDetail.criado_em }</Text>
          </View>

          <View style={ styles.columnDetail }>
            <Text style={ styles.titleText }>Modificado em</Text>
            <Text style={ styles.valueText }>{ stockDetail.modificado_em }</Text>
          </View>
        </View>
      </View>
    );
  }
}
