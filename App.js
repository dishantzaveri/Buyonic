import React, { Component } from 'react';
import axios from 'axios';
import Router from './src/Router';
import { baseURL } from './src/config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';;
import { NavigationContainer } from '@react-navigation/native';

import { ProductsList } from './src/screens/ProductsList.js';
import { ProductDetails } from './src/screens/ProductDetails.js';
import { Cart } from './src/screens/Cart.js';
import { CartIcon } from './src/components/CartIcon.js';
import { CartProvider } from './src/CartContext.js';
import AnimatedSplash from 'react-native-animated-splash-screen';
import Splash from './src/screens/splash';
const Stack = createNativeStackNavigator();


// const Stack = createNativeStackNavigator();
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
      

      <CartProvider>
      <NavigationContainer >
     
        <Stack.Navigator >
        <Stack.Screen name='splash' component={Splash}  hideNavBar key="root">  </Stack.Screen>
           <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })}
           />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
     
    );
    
  }
  
}


