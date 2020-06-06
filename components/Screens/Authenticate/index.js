/**
 * Tela de acesso
 * @author Davi Souto
 * @since  01/08/2018
 */

import React, { Component } from 'react';
import { Image, Alert } from 'react-native';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCodAcesso, setSenha, doLogin } from 'AppGestao/components/Redux/Actions/AuthActions';

import Store from 'AppGestao/components/Redux/Store';
import NavigationService from 'AppGestao/components/Navigator/NavigationService';

import Container from 'AppGestao/components/Container';

import TextInputLogin from 'AppGestao/components/TextInput/Login';
import ButtonDefault from 'AppGestao/components/Button/Default';

import LoadingIndicator from 'AppGestao/components/LoadingIndicator';

import styles from './styles';

class ScreenAuthenticate extends Component {

  constructor(props){
    super(props);

    if (Store.getState().authState.session)
      props.navigation.navigate('App');
  }

  doAuthenticate(){
    if (! this.props.cod_acesso)
      return Alert.alert("Autenticação", "Código de acesso não informado");

    if (! this.props.senha)
      return Alert.alert("Autenticação", "Senha não informada");

    let $this = this;

    this.props.doLogin(this.props.cod_acesso, this.props.senha).then((response) => {
      if ($this.props.status == 'success')
        return $this.props.navigation.navigate('App');

      $this.props.setSenha("");
      Alert.alert("Autenticação", $this.props.error);
    });
  }

  render() {
    const { cod_acesso } = this.props;
    return (
      <Container>
        <Image
          source={ require('AppGestao/icons/bmw-logo-672.png') }
          style={ styles.logo }
        />

        <TextInputLogin
          text="Email"
          inputProps={{
            // maxLength: 20,
            // keyboardType: "number-pad",
            keyboardAppearance: "dark",
            keyboardType: "email-address",
            returnKeyType: "next",
            textContentType: "username",
            autoCapitalize: "none",
            value: cod_acesso,
            onChangeText: (text) => this.props.setCodAcesso(text)
          }}
        />

        <TextInputLogin
          text="Senha"
          inputProps={{
            maxLength: 40,
            keyboardAppearance: "dark",
            secureTextEntry: true,
            textContentType: "password",
            returnKeyType: "go",
            value: this.props.senha,
            onChangeText: (text) => this.props.setSenha(text)
          }}
        />

        {
          this.props.loading
          ?
            ( <LoadingIndicator /> )
          :
            (
              <ButtonDefault
                text="Login"
                size={ 'LARGE' }
                color={ 'PRIMARY' }
                roundness={ 'NORMAL' }
                style={{ marginTop: 12 }}
                onPress={ this.doAuthenticate.bind(this) }
              />
            )
        }
      </Container>
    );
  }
}

///////////////////////////////////////////////////////////////////////////

const mapStateToProps = store => ({
  cod_acesso: store.authState.form_login.cod_acesso,
  senha: store.authState.form_login.senha,
  loading: store.authState.loading,
  status: store.authState.status,
  error: store.authState.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setCodAcesso, setSenha, doLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScreenAuthenticate);
