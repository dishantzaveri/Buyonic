import React, { Component } from 'react';
import axios from 'axios';
import Router from './src/Router';
import { baseURL } from './src/config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet } from 'react-native';


const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
}); 

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
    //   <CartProvider>
    //   <NavigationContainer>
     
    //     <Stack.Navigator>
        
    //       <Stack.Screen name='Products' component={ProductsList} 
    //       options={({ navigation }) => ({
    //         title: 'Products',
    //         headerTitleStyle: styles.headerTitle,
    //         headerRight: () => <CartIcon navigation={navigation}/>
    //       })}/>
    //       <Stack.Screen name='ProductDetails' component={ProductDetails} 
    //       options={({ navigation }) => ({
    //         title: 'Product details',
    //         headerTitleStyle: styles.headerTitle,
    //         headerRight: () => <CartIcon navigation={navigation}/>,
    //       })} />
    //       <Stack.Screen name='Cart' component={Cart} 
    //       options={({ navigation }) => ({
    //         title: 'My cart',
    //         headerTitleStyle: styles.headerTitle,
    //         headerRight: () => <CartIcon navigation={navigation}/>,
    //       })} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </CartProvider>
     
    );
    
  }
  
}
