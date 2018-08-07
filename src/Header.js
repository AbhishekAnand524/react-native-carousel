import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';


export default class Header extends Component {
  render() {
      const { viewStyle, textStyle } = styles;
    return (
    <View style={viewStyle}>
      <Text style={textStyle}>Welcome</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    viewStyle :{
        elevation: 4,
        backgroundColor: '#27ae60',
        height: 60,
        justifyContent: 'center',
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 20},
        shadowOpacity: 0.9
    }, 
    textStyle :{
      paddingLeft: 20,
        paddingBottom: 5,
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold'
    }
});
