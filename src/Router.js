import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StyleSheet, StatusBar } from 'react-native';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsList } from './components/ProductsList.js';
import { ProductDetails } from './components/ProductDetails.js';
import { Cart } from './components/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import Home2 from './components/Home2';

const Stack = createNativeStackNavigator();

// const Stack = createStackNavigator();
const RouterComponent = () => { 
 
  return (
    <Router  screenOptions={{headerShown: false}}>
      <Stack hideNavBar key="root" >
        <Stack  hideNavBar key="root"
          key="auth"
          type="reset"
          options={{headerShown: false}}
        >
          <Scene
           hideNavBar key="root"
          
            key="login"
            component={Login}
            initial
            options={{headerShown: false}}
          />
          <Scene
           hideNavBar key="root"
            options={{headerShown: false}}
            key="register"
            component={Register}
          />  
        </Stack>
 
        <Stack
         hideNavBar key="root"
          key="main"
          type="reset"
          options={{headerShown: false}}
        >
          <Scene
            hideNavBar key="root"
            key="home"
            component={Home2}
            options={{headerShown: false}}
            initial
          />
          {/* <Stack.Navigator>
        
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
              })} />
            </Stack.Navigator> */}
                 
        </Stack>
     
        
      
        
      </Stack>
    </Router>
  );
};

export default RouterComponent;