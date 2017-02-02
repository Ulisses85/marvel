'use strict'
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native';

export default class LoginView extends Component {
  render () {
    return (
      <Image source={{uri: "http://www.freeimageslive.com/galleries/objects/watch/pics/pocketwatch0831.jpg"}} style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>SuperHeroes</Text>
          <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
      </Image>
    )
  }
  onLogin () {
    Alert.alert(
      'Access',
      'You have logged in the system',
      [
        {
          text: 'Accept',
          onPress: (this.accept.bind(this))
        },
        {
          text: 'Cancel',
          onPress: (this.cancel.bind(this))
        }
      ]
    )
  }
  accept () {
    this.props.navigator.push({
      title: 'Dashboard',
      name: 'Dashboard',
      passProps: {}
    })
  };
  cancel () {
    console.log('Cancelled');
  }
}

const styles = StyleSheet.create ({
  container: {
    alignItems: 'stretch',
    flex: 1,
    padding: 30
  },
  button: {
    width: 300,
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1
  },
  buttonText: {
    color: 'white',
    alignItems: 'center',
    fontSize: 19
  },
  title: {
    fontSize: 30,
    marginTop: 100,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
})
