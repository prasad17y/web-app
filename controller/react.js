
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ImageBackground,KeyboardAvoidingView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {  TouchableOpacity,TextInput,Alert } from 'react-native';
//import MapView from 'react-native-maps';
//import {createStackNavigator,createAppContainer} from 'react-navigation';
import logg from './screens/a';

//ajax linker code
xhttp.open("POST", "fetch.js", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

type Props = {};
function phonenumberr(inputtxt)
{
var phoneno = /^\d{10}$/;
  if(inputtxt.match(phoneno))
     {
      alert(" valid Phone Number");
    //return true;
     }
   else
     {
       alert("Not a valid Phone Number");
       return false;
     }
}
export default  class App extends Component<Props> {
  constructor(props) {
      super(props);
      this.state = {
          phonenumber: '',
          otp: ''
       };
  }


  login = (phonenumber, otp) => {
          if (otp==1001) {
        Alert.alert('phone-Number: ' + phonenumber + ' otp: ' + otp);

      //<logg/>

          }
          else {
              Alert.alert('something wrong');
          }

   }
   validatephonenumber = (phonenumber) => {
          phonenumberr(phonenumber);
    }

    xhttp.send("mobileNo=phonenumber");
    xhttp.send("otpToVerify=otp");
  render() {
    return (
      <KeyboardAwareScrollView
        style={{ backgroundColor: '#4c69a5' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
  >
      <ImageBackground
      source={require('./good.jpg')}
      imageStyle={{resizeMode:'stretch'}}
      style={styles.backgroundimage}>

      <View style={styles.container}>
        <Text style={styles.welcome}>Enter Details To Login!</Text>
          <Text style={styles.welcome1}>Phone Number</Text>
          <TextInput style = {styles.input}
               placeholder = "Phone-number"
               placeholderTextColor = "#9a73ef"
                 onChangeText={(text) => this.setState({ phonenumber: text })}
              />
              <TouchableOpacity
              //style = {styles.submitButton}
              onPress = {
                 () => this.validatephonenumber(this.state.phonenumber)
              }
              >

            <Text style = {styles.btn}>
               Send-Otp

            </Text>
         </TouchableOpacity>
                <Text style={styles.welcome1}>Enter-Otp</Text>
                <TextInput style = {styles.input}
                     placeholder = "Otp"
                     placeholderTextColor = "#9a73ef"
                    onChangeText={(text) => this.setState({ otp: text })}
                    />
                    <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.phonenumber, this.state.otp)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>

      </View>


      </ImageBackground>
  </KeyboardAwareScrollView>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    //justifyContent: 'center',
    //alignItems: 'center',
  //  backgroundColor: '#F5FCFF',
  flex: 1,
  //flexDirection: 'col'

  },
  input:{
    margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1,
       //placeholderTextColor :"#9a73ef"
       color:'#2ECCFA'

  },
  submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 30,
    color:'#FA8258'
  },
  welcome1: {
    fontSize: 20,
    //textAlign: 'center',
    margin: 10,
    color:'#F5A9A9'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  backgroundimage:{
    flex:1,
    width:null,
    height:null,
    resizeMode:'cover'
  },
  btn: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
   }
});
