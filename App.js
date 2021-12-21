import React, { Component } from 'react';
import axios from 'axios';
import Router from './src/Router';
import { baseURL } from './src/config';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';;
const Stack = createStackNavigator();
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 25
  }
}); 

export default class App extends Component {
  componentDidMount() {
    axios.defaults.baseURL = baseURL;
    axios.defaults.timeout = 1500;
  }

  render() {
    return (
      
<Router/>
    );
    
  }
  
}


