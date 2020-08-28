import React, { Component } from 'react';
import { Image, View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import styles from '../assets/styles/splash'

export default class SplashScreens extends Component {
  componentDidMount() {
    setTimeout(this.navigateToHome, 3000);
  }

  navigateToHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/splash.png')}
          style={styles.container}
          resizeMode={'cover'}
        />
      </View>
    );
  }
}
