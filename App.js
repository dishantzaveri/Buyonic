import React, { Component } from 'react';
import axios from 'axios';
import Router from './src/Router';
import { baseURL } from './src/config';
import AnimatedSplash from "react-native-animated-splash-screen";


export default class App extends Component {
  componentDidMount() {
    axios.defaults.baseURL = baseURL;
    axios.defaults.timeout = 1500;
  }

  render() {
    return (
      // <AnimatedSplash
      //   translucent={true}
      //   isLoaded={this.state.isLoaded}
      //   logoImage={require("./src/components/common/group.png")}
      //   backgroundColor={"#262626"}
      //   logoHeight={150}
      //   logoWidth={150}
      //   backgroundColor='white'
        
        
      // >
      //  <Router />
      // </AnimatedSplash>
      <Router />
      
     
    );
  }
}