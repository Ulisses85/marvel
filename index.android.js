/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

import LoginView from './src/components/loginView.js';
import DashboardView from'./src/components/dashboardView.js';

const NavigatorBarRouteMapper = {
  LeftButton: function(route, navigator, index) {
    if(route.name == 'LoginView') {
      return null;
    }
    return(
      <TouchableHighlight onPress={()=>{
        if(index > 0){
          navigator.pop();
        }
      }}>
      <Text style={{marginTop:10, marginLeft:20, color:'#007AFF' }}>Atras</Text>
      </TouchableHighlight>

    )
  },
  RightButton: function(route, navigator, index) {
    return null;
  },
  Title: function(route, navigator, index){
    return(
      <Text style={{marginTop:10, color:'#007AFF'}}>
      {route.name}
      </Text>
    )
  }
};

export default class marvel extends Component {
  renderScene (route, navigator) {
    switch (route.name) {
      case 'LoginView':
        return (
          <LoginView navigator={navigator} route={route} />
        )
      case 'DashboardView':
        return (
          <DashboardView navigator={navigator} route={route} />
        );
    }
  }

  render () {
    return (
      <Navigator style={{backgroundColor: '#fff'}}
        initialRoute={{name: 'LoginView'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.floatFromRight;
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigatorBarRouteMapper}
          />
        } />
    )
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('marvel', () => marvel);
