/**
 * Tela de estoque
 * @author Davi Souto
 * @since  13/08/2018
 */

import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, RefreshControl } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStockVeicles, setRefreshStock } from 'AppGestao/components/Redux/Actions/StockActions';

import Icon from 'react-native-vector-icons/FontAwesome';

import Container from 'AppGestao/components/Container';
import ButtonDefault from 'AppGestao/components/Button/Default';
import ButtonRectangle from 'AppGestao/components/Button/Rectangle';

import TopBar from 'AppGestao/components/TopBar';
import VeicleBox from 'AppGestao/components/VeicleBox';

// import LoadingIndicator from 'AppGestao/components/LoadingIndicator';

import styles from './styles';

class ScreenStock extends Component {

  doAddVeicle(){
    this.props.navigation.navigate('AddVeicle');
  }

  doShowVeicleDetail(veicle){
    this.props.navigation.navigate('VeicleDetails', { veicle });
  }

  componentDidMount(){
    this.props.getStockVeicles();
  }

  _onRefresh = () => {
    this.props.setRefreshStock(false);
    this.props.getStockVeicles();
  }

  ///////////////////////////////////////////////////////

  render() {
    // if (this.props.refreshStock)
    //   this.props.getStockVeicles();

    return (
      <Container scroll={ false } autoPaddingIOS={ false }>
        <TopBar
          text={ 'Estoque' }
          navigation={ this.props.navigation }
        />

        <ScrollView
          style={{ alignSelf: 'stretch' }}
          contentContainerStyle={{ alignItems: 'center' }}
          refreshControl={
            <RefreshControl
              refreshing={ this.props.loading }
              onRefresh={ this._onRefresh }
              tintColor="#3498DB"
            />
          }
        >
          { this.renderAddVehicleButton() }

          { this.renderStockVehicles() }
        </ScrollView>
      </Container>
    );
  }

  renderAddVehicleButton(){
    if (this.props.loading)
      return false;

    return (
      <ButtonDefault
        size={ 'NORMAL' }
        color={ 'DARK' }
        roundness={ 'STRONG' }
        text={ "Adicionar Veículo" }
        onPress={ this.doAddVeicle.bind(this) }
        style={{ marginTop: 8 }}
      />
    );

    // <ButtonDefault
    //   size={ 'NORMAL' }
    //   color={ 'DARK' }
    //   roundness={ 'STRONG' }
    //   text={ "Refresh" }
    //   onPress={ () => this.props.setRefreshStock(true) }
    //   style={{ marginTop: 8 }}
    // />
  }

  renderStockVehicles(){
    if (this.props.stock.length > 0)
    {
      return this.props.stock.map((veicle, key) => {
        return (
          <VeicleBox
          key={ key }
          veicle={ veicle }
          onPress={ () => this.doShowVeicleDetail(veicle) }
          />
        )
      });
    }

    if (! this.props.loading)
    {
      return (
        <Text style={ styles.noVehicle }>Nenhum veículo</Text>
      )
    }

    return false;
  }
}

const mapStateToProps = store => ({
  stock: store.stockState.stock,
  loading: store.stockState.loading,
  refreshStock: store.stockState.refreshStock
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getStockVeicles, setRefreshStock }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScreenStock);
