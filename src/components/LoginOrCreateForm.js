import React, { Component } from 'react';
import { Button, View, Text, TextInput, StyleSheet,Image,StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';


class LoginOrCreateForm extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    address:'',
  }

  onemailChange(text) {
    this.setState({ email: text });
  }

  onPasswordChange(text) {
    this.setState({ password: text });
  }

  onnameChange(text) {
    this.setState({ name: text });
  }

  onaddressChange(text) {
    this.setState({ address: text });
  }


  handleRequest() {
    const endpoint = this.props.create ? 'register' : 'login';
    const payload = { email: this.state.email, password: this.state.password } 
    
    if (this.props.create) {
      payload.name = this.state.name;
    }
    if (this.props.create) {
      payload.address = this.state.address;
     
    }
    console.log(payload);
    
    axios
      .post(`/auth/${endpoint}/`, payload)
      .then(response => {
        const { token, user } = response.data;

        // We set the returned token as the default authorization header
        axios.defaults.headers.common.Authorization = `Token ${token}`;
        console.log(token)
        
        // Navigate to the home screen
        Actions.main();
      })
      .catch(error => console.log(error));
  }

  renderCreateForm() {
    const { formContainerStyle } = styles;
    if (this.props.create) {
      return (
          <View  >
            <View  style={styles.inputView}>
            <TextInput
              placeholder="Name"
              autoCorrect={false}
              placeholderTextColor={'white'}
              onChangeText={this.onnameChange.bind(this)}
              style={styles.TextInput}
            />       
            </View>  
            <View style={styles.inputView} >
            <TextInput
              placeholder="Address"
              autoCorrect={false}
              placeholderTextColor={'white'}
              onChangeText={this.onaddressChange.bind(this)}
              style={styles.TextInput}
            />       
            </View>  
          </View>
          
          
      );
    }
  }

  renderButton() {
    const buttonText = this.props.create ? 'Register' : 'Login';

    return (
      <View style={styles.inputView2} >
      <Button title={buttonText}  onPress={this.handleRequest.bind(this)}/>
      </View>
    );
  }


  renderCreateLink() {
    if (!this.props.create) {
     
      return (
        <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        }} >
        <Text  style={{ color: '#224957' }} >
          Don't have an account ?  
          <Text  onPress={() => Actions.register()}>
            {' Register'}
          </Text>
        </Text>
        </View>
      );
    }
  }

  render() {
    const {
      formContainerStyle,

      buttonContainerStyle,
      accountCreateContainerStyle
    } = styles;

    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
       
        <View style={formContainerStyle}>
        <Image style={styles.image} source={require("./common/group.png")} />
        
          <View style={styles.inputView}>
         
           
            <TextInput
              placeholder="Email"
              placeholderTextColor={'white'}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={this.onemailChange.bind(this)}
              style={styles.TextInput}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              placeholderTextColor={'white'}
              autoCorrect={false}
              placeholder="Password"
              onChangeText={this.onPasswordChange.bind(this)}
              style={styles.TextInput}
            />
          </View>
          {this.renderCreateForm()}
        </View>
        <View style={buttonContainerStyle}>
          {this.renderButton()}
          <View style={accountCreateContainerStyle}>
            {this.renderCreateLink()}
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  formContainerStyle: {
    flex: 1,
   
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    marginBottom: 20,
    height:100,
    width:100,
    marginTop: 150
   
  },
 
  inputView: {
    backgroundColor: "#224957",
   
    width: "70%",
    height: 60,
    marginBottom: 20,
 
    alignItems: "center",
  },
    inputView2: {
  

    alignItems: "center",
  },
 
 
  TextInput: {
    height: 100,
    flex: 1,
    padding: 10,
    
    color: "white",
  },

  textInputStyle: {
   
    padding: 15
  },
  fieldStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  
  button: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  
  },
  buttonContainerStyle: {
   
    justifyContent: 'center',
    padding: 50,
   
  },
  accountCreateContainerStyle: {
    padding: 25,
    alignItems: 'center',
   
    
  }
});


export default LoginOrCreateForm;