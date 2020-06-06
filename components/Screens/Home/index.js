/**
 * Tela principal
 * @author Davi Souto
 * @since  02/08/2018
 */

import React, { Component } from 'react';
import { Text, ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import Container from 'AppGestao/components/Container';
import WelcomeBar from 'AppGestao/components/TopBar/WelcomeBar';
import HomeBox from 'AppGestao/components/HomeBox';

import styles from './styles';

class ScreenHome extends Component {
  render() {
    return (
      <Container scroll={ false } autoPaddingIOS={ false }>
        <WelcomeBar navigation={ this.props.navigation } />

        <ScrollView
          showsVerticalScrollIndicator={ true }
          style={ styles.notificationScroll }
          contentContainerStyle={ styles.notificationScrollContent }
        >
          <HomeBox />

          <View style={ styles.notificationBox }>
            <Text style={ styles.notificationText }>Quadro de avisos dinâmico</Text>
          </View>
          <View style={ styles.notificationBox }>
            <Text style={ styles.notificationText }>Lorem ipsum dolor sit amet cosectetur adispising elit</Text>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

///////////////////////////////////////////////////////////////////////////

const mapStateToProps = store => ({
  session: store.authState.session
});

export default connect(mapStateToProps)(ScreenHome);
