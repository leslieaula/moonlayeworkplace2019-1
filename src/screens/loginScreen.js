/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Alert,
  UIManager,
  LayoutAnimation 
} from 'react-native'

// import { authorize, refresh, revoke } from 'react-native-app-auth';
import { Container, Header, Content, Icon } from 'native-base'
import bgImage from '../assets/images/bg-login.jpg'

// UIManager.setLayoutAnimationEnabledExperimental &&
//   UIManager.setLayoutAnimationEnabledExperimental(true);

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

// const config = {
//   issuer: 'http://192.168.43.132:5000',
//   clientId: 'native.code',
//   redirectUrl: 'com.eworkplace:/oauthredirect',
//   additionalParameters: {},
//   scopes: ['openid', 'profile', 'email', 'ework']

  // serviceConfiguration: {
  //   authorizationEndpoint: 'https://demo.identityserver.io/connect/authorize',
  //   tokenEndpoint: 'https://demo.identityserver.io/connect/token',
  //   revocationEndpoint: 'https://demo.identityserver.io/connect/revoke'
  // }
// };

export default class loginScreen extends Component {
  constructor(props){
    super(props)
    
    // this.state = {
    //   hasLoggedInOnce: false,
    //   accessToken: '',
    //   accessTokenExpirationDate: '',
    //   refreshToken: ''
    // };
  }

  // async login() {
  //   console.log('login')
  //   try {
  //     console.log('try')
  //     const authState = await authorize(config);
  //     console.log(authState)

  //     this.setState(
  //       {
  //         hasLoggedInOnce: true,
  //         accessToken: authState.accessToken,
  //         accessTokenExpirationDate: authState.accessTokenExpirationDate,
  //         refreshToken: authState.refreshToken,
  //         scopes: authState.scopes
  //       }
  //     );

  //   } catch (error) {
  //     console.log('catch')
  //     Alert.alert('Failed to log in ', error.message);
  //   }
  // };
  
  render() {
    StatusBar.setBackgroundColor('#0063AD', true)    
    return (
        <ImageBackground source={bgImage} style={styles.backgroundContainer}>
          <View style={styles.viewContainer}>
            <View style={styles.logoContainer}>
              <View style={styles.moonlay}>
                <Text style={styles.mText}>moonlay</Text>
                <Text style={styles.tText}> technologies</Text>
              </View>
              <Text style={styles.eText}>e-workplace</Text>
              <Text style={styles.WText}>Welcome!</Text>
              <Text style={styles.HText}>Hope you enjoy your day!</Text>
            </View>

            <View style={styles.inputContainer}>
                <Icon name={'person'}
                 style={styles.inputIcon} />
                <TextInput 
                  style={styles.input}
                  placeholder={'Username'}  
                  placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
                  underlineColorAndroid='transparent'
                  returnKeyType='next'
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name={'lock'}
                 style={styles.inputIcon} />
                <TextInput 
                  style={styles.input}
                  placeholder={'Password'}  
                  secureTextEntry={true}
                  placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
                  underlineColorAndroid='transparent'
                />
            </View>
            <TouchableOpacity 
              style={styles.btnLogin}
              // onPress={() => this.props.navigation.navigate("DrawerNavigator")}>
              onPress={() => this.props.navigation.navigate('Dashboard')}>
                <Text style={styles.text}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    backgroundContainer: {
      flex: 1,
      height: HEIGHT,
      width: WIDTH, 
    },
    viewContainer:{
      height: HEIGHT,
      width: WIDTH, 
      backgroundColor:'rgba(0, 113, 198, 0.6)',
      alignItems: 'center',
    },
    moonlay:{
      flexDirection: 'row'
    },
    mText:{
      fontSize: 25,
      color: '#FFF'
    },
    tText:{
      fontSize: 25,
      fontWeight: 'bold',
      color: '#FFF'

    },
    logoContainer: {
      alignItems: 'center', 
      marginTop: 50,
    },
    logo: {
      width: 290,
      height: 30,
    },
    eText: {
      color: 'white',
      fontSize: 15,
      fontWeight: '500',
      opacity: 0.8,
      fontStyle: 'italic',
    },
    WText: {
      color: 'white',
      fontSize: 30,
      opacity: 0.8,
      marginTop: 75,
    },
    HText: {
      color: 'white',
      marginBottom: 50,
    },
    inputContainer: {
      marginTop: 10,
    },
    input: {
       width: WIDTH - 55,
       height: 45,
       borderRadius: 15,
       fontSize: 16,
       paddingLeft: 50,
       backgroundColor: 'rgba(0, 0, 0, 0.35)',
       color: 'rgba(255, 255, 255, 0.7)',
    },
    inputIcon: {
      position: 'absolute',
      marginHorizontal: 18,
      marginVertical: 8,
      marginTop: 10,
      color: 'white',
      opacity: 0.75,
      fontSize: 25
    },
    btnLogin: {
      marginTop: 20,
      marginLeft:  0,
      width: WIDTH - 55,
      height: 45, 
      borderRadius: 15,
      fontSize: 16,
      backgroundColor: 'white',
      opacity: 0.75,
      justifyContent: 'center',
    },
    text: {
      color: '#0072C6',      
      fontSize: 17,
      fontWeight: 'bold',
      textAlign: 'center',
    }
  },
);
