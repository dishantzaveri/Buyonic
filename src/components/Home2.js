import React, { Component } from 'react';
import axios from 'axios';
import { baseURL } from '../config';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';;
import { NavigationContainer } from '@react-navigation/native';

import { ProductsList } from './ProductsList.js';
import { ProductDetails } from './ProductDetails.js';
import { Cart } from './Cart.js';
import { CartIcon } from './CartIcon.js';
import { CartProvider } from '../CartContext.js';
import Splash from './splash';

import Home from './Home';
const Stack = createStackNavigator();


// const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 25
  }
}); 

export default class Home2 extends Component {
  componentDidMount() {
    axios.defaults.baseURL = baseURL;
    axios.defaults.timeout = 1500;
  }

  render() {
    return (
      

      <CartProvider>
      <NavigationContainer >
     
        <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name='splash' component={Splash}  options={{ headerShown: false }}  />
         <Stack.Screen name='Home' component={Home}  options={{ headerShown: false }}  />
           <Stack.Screen name='ProductsList' component={ProductsList}  options={{ headerShown: false }}  
          options={({ navigation }) => ({
            title: '        PRODUCTS' ,
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails}   
          options={({ navigation  }) => ({
            headerShown: false,
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerShown: false,
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


