/**
 * Tela de detalhes do veículo
 * @author Davi Souto
 * @since  15/08/2018
 */

import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVeicle } from 'AppGestao/components/Redux/Actions/VeicleActions';

import Container from 'AppGestao/components/Container';
import ButtonDefault from 'AppGestao/components/Button/Default';
import VeicleDetailsBox from 'AppGestao/components/VeicleDetailsBox';
import StockVeicleDetailsBox from 'AppGestao/components/StockVeicleDetailsBox';
import VeicleInputImageList from 'AppGestao/components/VeicleInputImageList';

import TopBar from 'AppGestao/components/TopBar';
import ModalCamera from 'AppGestao/components/ModalCamera';

import LoadingIndicator from 'AppGestao/components/LoadingIndicator';

import { updateVeicle } from 'AppGestao/components/Redux/Actions/VeicleActions';

import styles from './styles';

class VeicleDetails extends Component {

  // static defaultProps = {
  // };

  constructor(props){
    super(props);

    this.state = {
      modalVisible: false,
      selected: {
        veicle: false,
        image_angle: false
      }
    };
  }

  doSaveVeicleData(){
    this.props.updateVeicle(this.props.veicle);
    // alert("Salvo com sucesso !");

    // this.props.navigation.goBack();
  }

  setModalVisible(visible, selected){
    if (! selected)
    {
      selected = {
        veicle: false,
        image_angle: false
      }
    }
    this.setState({ modalVisible: visible, selected: selected });
  }

  onPressImage(veicle, image_angle, hasImage){
    this.setState({ hasImage: hasImage });
    this.setModalVisible(true, { veicle, image_angle });
  }

  onImageReceive(image_result) {
    let image_angle = this.state.selected.image_angle;

    Object.keys(this.props.veicle.imagens).map((veicleImageKey, key) => {
      if (veicleImageKey == image_angle)
      {
        this.props.veicle.imagens[image_angle].imagem = image_result.uri;
        this.props.veicle.imagens[image_angle].status = "upload";

        // Se for imagem extra, adicionar nova imagem extra
        if (this.props.veicle.imagens[image_angle].type == "extra")
        {
          this.props.veicle.imagens.push({
            "imagem": false,
            "label_id": false,
            "label": "Extra",
            "type": "extra",
            "ordem": null
          });

          this.props.veicle.imagensCount += 1;
        }
      }
    });
  }

  onRemoveImage(){
    let image_angle = this.state.selected.image_angle;

    Object.keys(this.props.veicle.imagens).map((veicleImageKey, key) => {
      if (veicleImageKey == image_angle)
      {
        this.props.veicle.imagens[image_angle].imagem = false;
        this.props.veicle.imagens[image_angle].status = "remove";
      }
    });
  }

  componentDidMount(){
    this.props.getVeicle(this.props.navigation.state.params.veicle.id);
  }

  ////////////////////////////////////////////////

  render() {
    const veicle = this.props.veicle;

    return (
      <Container scroll={ false } autoPaddingIOS={ false }>
        <TopBar
          text={ (veicle && veicle.marca && ! this.props.loading) ? veicle.marca.toUpperCase() + " " + veicle.modelo.toUpperCase() : "Detalhes do Veículo" }
          showBackButton={ true }
          navigation={ this.props.navigation }
        />
        <ScrollView
          style={{ alignSelf: 'stretch' }}
          contentContainerStyle={{ alignItems: 'center' }}
        >
          {
            (! veicle || this.props.loading)
            ?
              ( <LoadingIndicator /> )
            :
             (
               <View style={ styles.viewVeicleDetails }>
                 <VeicleDetailsBox veicle={ veicle } />
                 {/*<StockVeicleDetailsBox stockDetail={ veicle.stockDetail } />*/}
                 <VeicleInputImageList veicle={ veicle } onPressImage={ this.onPressImage.bind(this) } />

                 <ButtonDefault
                   size={ 'NORMAL' }
                   color={ 'PRIMARY' }
                   roundness={ 'STRONG' }
                   text={ "Salvar" }
                   onPress={ this.doSaveVeicleData.bind(this) }
                   navigation={ this.props.navigation }
                   style={{ marginTop: 12, marginBottom: 8 }}
                 />
               </View>
             )
          }
        </ScrollView>

        <ModalCamera
          modalVisible={ this.state.modalVisible }
          setModalVisible={ this.setModalVisible.bind(this) }
          onImageReceive={ this.onImageReceive.bind(this) }
          onRemoveImage={ this.onRemoveImage.bind(this) }
          hasImage={ this.state.hasImage }
        />
      </Container>
    );
  }
}

const mapStateToProps = store => ({
  veicle: store.veicleState.veicle,
  loading: store.veicleState.loading
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getVeicle, updateVeicle }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VeicleDetails);
