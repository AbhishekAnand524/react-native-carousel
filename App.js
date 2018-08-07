import React, {Component} from 'react';
import { View, Text } from 'react-native';
import  CarouselDisplay from './src/CarouselDisplay';
import  Header from './src/Header';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Welcome'}/>
        <CarouselDisplay />
      </View>
    );
  }
}

