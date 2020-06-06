/**
 * Componente VeicleDetailsBox
 * @author Davi Souto
 * @since  15/08/2018
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class VeicleDetailsBox extends Component {

  render() {
    const veicle = this.props.veicle;

    return (
      <View style={ styles.veicleDetailsBox }>
        <View style={ [styles.rowDetail] }>
          <View style={ styles.columnDetail }>
            <Text style={ [styles.titleText, styles.titleBoxText] }>Detalhes do Veículo</Text>
          </View>
        </View>

        <View style={ styles.rowDetail }>
          <View style={ styles.columnDetail }>
            <Text style={ styles.titleText }>Marca</Text>
            <Text style={ styles.valueText }>{ veicle.marca.toUpperCase() }</Text>
          </View>

          <View style={ styles.columnDetail }>
            <Text style={ styles.titleText }>Modelo</Text>
            <Text style={ styles.valueText }>{ veicle.modelo.toUpperCase() }</Text>
          </View>
        </View>

        <View style={ styles.rowDetail }>
          <View style={ styles.columnDetail }>
            <Text style={ styles.titleText }>Ano de Fabricação</Text>
            <Text style={ styles.valueText }>{ veicle.anofabricacao || "-" }</Text>
          </View>

          <View style={ styles.columnDetail }>
            <Text style={ styles.titleText }>Ano de Modelo</Text>
            <Text style={ styles.valueText }>{ veicle.anomodelo || "-" }</Text>
          </View>
        </View>

        <View style={ styles.rowDetail }>
          <View style={ styles.columnDetail }>
            <Text style={ styles.titleText }>Placa</Text>
            <Text style={ styles.valueText }>{ veicle.placa.toUpperCase() }</Text>
          </View>

          <View style={ styles.columnDetail }>
            <Text style={ styles.titleText }>Cor</Text>
            <Text style={ styles.valueText }>{ veicle.cor || "-" }</Text>
          </View>
        </View>

        {
          (veicle.valorvenda)
          ?
            <View style={ styles.rowDetail }>
              <View style={ styles.columnDetail }>
                <Text style={ styles.titleText }>Valor</Text>
                <Text style={ styles.valueText }>{ veicle.valorvenda }</Text>
              </View>
            </View>
          :
            false
        }
      </View>
    );
  }
}
