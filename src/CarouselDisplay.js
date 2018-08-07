import React, { Component } from "react";
import {
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Animated
} from "react-native";

const deviceWidth = Dimensions.get("window").width;

export default class CarouselDisplay extends Component {
  animVal = new Animated.Value(0);
  render() {
    const { viewStyle, imageStyle } = styles;
    return (
      <View style={viewStyle} >
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          snapToAlignment={"center"}
       
        >
          <Image source={require("./images/image01.png")} style={imageStyle} />
          <Image source={require("./images/image02.png")} style={imageStyle} />
          <Image source={require("./images/image03.png")} style={imageStyle} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10,
  },
  imageStyle: {
    width: deviceWidth - 20,
    height: 400,
    resizeMode: Image.resizeMode.contain
  }
});
