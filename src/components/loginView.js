'use strict'
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Alert,
  StyleSheet
} from 'react-native';

export default class LoginView extends Component {
  render () {
    return (
      <View>
        <TouchableHighlight onPress={(this.onLogin.bind(this))} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
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
  console.log('Accepted');
  };

  cancel () {
    console.log('Cancelled');
  }
}

const styles = StyleSheet.create ({
  button: {
    width: 300,
    height: 30,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1
  },
  buttonText: {
    color: 'white'
  }
})
