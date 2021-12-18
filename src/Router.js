import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import { StyleSheet, StatusBar } from 'react-native';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';



const RouterComponent = () => { 
 
  return (
    <Router>
      <Stack hideNavBar key="root">
        <Stack
          key="auth"
          type="reset"
          
        >
          <Scene
            title="BUYONIC"
            key="login"
            component={Login}
            initial
          />
          <Scene
            title="BUYONIC"
            key="register"
            component={Register}
          />  
        </Stack>
        <Stack
          key="main"
          type="reset"
          
        >
          <Scene
            title="Home"
            key="home"
            component={Home}
            initial
          />
        </Stack>
      </Stack>
    </Router>
  );
};

export default RouterComponent;