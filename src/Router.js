import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Login from './components/Login';
import Register from './components/Register';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home2 from './components/Home2';

const Stack = createNativeStackNavigator();

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
        
                 
        </Stack>
     
        
      
        
      </Stack>
    </Router>
  );
};

export default RouterComponent;