'use strict'
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Navigator,
  StyleSheet
} from 'react-native';

export default class DashboardView extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>It is dashboard Component</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 25
  }
})
