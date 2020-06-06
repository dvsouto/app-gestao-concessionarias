/**
 * Tela de adicionar veículo
 * @author Davi Souto
 * @since  15/08/2018
 */

import React, { Component } from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Container from 'AppGestao/components/Container';
import ButtonDefault from 'AppGestao/components/Button/Default';

import TextInputDefault from 'AppGestao/components/TextInput/Default';
import TextInputMasked from 'AppGestao/components/TextInput/Masked';

import VeicleDetailsBox from 'AppGestao/components/VeicleDetailsBox';
import StockVeicleDetailsBox from 'AppGestao/components/StockVeicleDetailsBox';
import VeicleInputImageList from 'AppGestao/components/VeicleInputImageList';

import LoadingIndicator from 'AppGestao/components/LoadingIndicator';

import TopBar from 'AppGestao/components/TopBar';
import ModalCamera from 'AppGestao/components/ModalCamera';

import {
    getVeicleDataByCarPlate,
    setVeicleCarPlate,
    setVeicleValorVenda,
    createVeicle,
    resetVeicleData,
    getPicureLabels
  } from 'AppGestao/components/Redux/Actions/VeicleActions';

import styles from './styles';

class ScreenNewVeicle extends Component {

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

    this.props.setVeicleValorVenda('');
    this.props.setVeicleCarPlate('');
    this.props.getPicureLabels();
  }

  componentWillUnmount(){
    this.props.resetVeicleData();
  }

  loadVeicleData(){
    this.props.getVeicleDataByCarPlate(this.props.veicle.placa);
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

  onPressImage(veicle, image_angle){
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

  doSaveVeicleData(){
    let $this = this;

    this.props.createVeicle(this.props.veicle).then(function(response){
      if (response.payload.data && response.payload.data.success)
      {
        alert("Veículo criado com sucesso !");
        console.log(response.payload.data);

        return $this.props.navigation.goBack();
      }
 
      msg = "Erro ao criar veículo";
      // console.log(response);
      if (response.payload.data && response.payload.data.msg)
        console.log(response.payload.data.msg);
        //msg += "\n" + response.payload.data.msg;

      alert(msg);
    });
  }

  render() {
    const veicle = this.props.veicle;

    if (! this.props.insertingVeicle)
    {
      return (
        <Container scroll={ false } autoPaddingIOS={ false }>
          <TopBar
            text="Adicionar veículo"
            showBackButton={ true }
            navigation={ this.props.navigation }
          />

          <ScrollView
            style={{ alignSelf: 'stretch' }}
            contentContainerStyle={{ alignItems: 'center' }}
          >

          <TextInputMasked
            text="Informe a placa do veículo"
            inputProps={{
              maxLength: 8,
              keyboardAppearance: "dark",
              returnKeyLabel: "Buscar",
              returnKeyType: "search",
              placeholder: "AAA-0000",
              autoCapitalize: "characters",
              autoFocus: true,
              type: 'custom',
              options: {
                mask: 'AAA-9999',
              },
              onChangeText: (text) => this.props.setVeicleCarPlate(text),
            }}
            styleContainer={{
              marginTop: 20
            }}
          />

          <ButtonDefault
            size={ 'NORMAL' }
            color={ 'PRIMARY' }
            roundness={ 'STRONG' }
            text={ "Buscar" }
            onPress={ this.loadVeicleData.bind(this) }
            navigation={ this.props.navigation }
            style={{ marginTop: 12, marginBottom: 8 }}
            buttonProps={{
              disabled: this.props.loadingVeicleData
            }}
          />

          { (this.props.loadingVeicleData) ? ( <LoadingIndicator /> ) : false }

          {
            (this.props.error) ? ( <Text>{ this.props.error }</Text> ) : false
          }

          {
            (this.props.loadedVeicleData)
            ?
              (
                <View style={ styles.viewVeicleData }>
                  <VeicleDetailsBox veicle={ veicle } />

                  <TextInputDefault
                  text="Valor"
                  inputProps={{
                    maxLength: 9,
                    keyboardAppearance: "dark",
                    keyboardType: "decimal-pad",
                    returnKeyLabel: "OK",
                    returnKeyType: "next",
                    placeholder: "R$ 60.000,00",
                    onChangeText: (text) => this.props.setVeicleValorVenda(text)
                  }}
                  styleContainer={{
                    marginTop: 12
                  }}
                  />

                  {
                    (this.props.loadedPictureLabels)
                    ?
                      ( <VeicleInputImageList veicle={ veicle } onPressImage={ this.onPressImage.bind(this) } /> )
                    :
                      false
                  }

                  { (this.props.loadingPictureLabels) ? ( <LoadingIndicator /> ) : false }

                  <ButtonDefault
                    size={ 'NORMAL' }
                    color={ 'PRIMARY' }
                    roundness={ 'STRONG' }
                    text={ "Salvar" }
                    onPress={ this.doSaveVeicleData.bind(this) }
                    navigation={ this.props.navigation }
                    style={{ marginTop: 12, marginBottom: 8 }}
                    buttonProps={{
                      disabled: this.props.insertingVeicle
                    }}
                  />
                </View>
              )
            :
              false
          }
          </ScrollView>

          <ModalCamera
            modalVisible={ this.state.modalVisible }
            setModalVisible={ this.setModalVisible.bind(this) }
            onImageReceive={ this.onImageReceive.bind(this) }
          />
        </Container>
      );
    } else {
      return (
        <Container scroll={ false } autoPaddingIOS={ false }>
          <TopBar
            text="Adicionar veículo"
            showBackButton={ false }
            navigation={ this.props.navigation }
          />

          <ScrollView
            style={{ alignSelf: 'stretch' }}
            contentContainerStyle={{ alignItems: 'center' }}
          >
            <LoadingIndicator />
          </ScrollView>
        </Container>
      )
    }
  }
}

const mapStateToProps = store => ({
  veicle: store.createVeicleState.veicle,
  loadingVeicleData: store.createVeicleState.loadingVeicleData,
  loadedVeicleData: store.createVeicleState.loadedVeicleData,
  loadingPictureLabels: store.createVeicleState.loadingPictureLabels,
  loadedPictureLabels: store.createVeicleState.loadedPictureLabels,
  insertingVeicle: store.createVeicleState.insertingVeicle,
  error: store.createVeicleState.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    getVeicleDataByCarPlate,
    setVeicleCarPlate,
    setVeicleValorVenda,
    createVeicle,
    resetVeicleData,
    getPicureLabels
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScreenNewVeicle);
