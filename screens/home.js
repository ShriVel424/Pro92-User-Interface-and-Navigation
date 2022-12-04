import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, SafeAreaView, StatusBar, TouchableOpacity, ImageBackground, Image} from 'react-native';
import {Linking} from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <SafeAreaView style = {styles.droidSafeArea}/>
      <ImageBackground source = {require("../assets/marsbackground.webp")} style = {styles.backgroundImage}>

      <View style = {styles.titleBar}>
       <Text style={styles.titleText}>   Mars Rover Exploration App</Text>
       </View>

      <TouchableOpacity onPress = {"https://mars.nasa.gov/maps/location/?mission=M20"}>
      <Text>Where is Perseverance?</Text>
      <Image source = {require("../assets/perseveranceimage.png")}/>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate("ISSLocation")}>
      <Text style = {styles.routeText}>Perseverance Rover Location</Text>
      <Text style = {styles.bgDigit}>1</Text>
      <Image source = {require("../assets/perseverancebuttonimg.png")} style = {styles.iconImage}></Image>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.routeCard} onPress = {()=>this.props.navigation.navigate("Meteor")}>
      <Text style = {styles.routeText}>Past Rover Cam Visuals</Text>
      <Text style = {styles.bgDigit}>2</Text>
      <Image source = {require("../assets/pastrovercamvisualsimg.png")} style = {styles.iconImage}></Image>
      </TouchableOpacity>
      </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontFamily: "Courier New",
    align: "center",
    alignContent: "center",
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 25,
    fontFamily: "Courier New",
    fontWeight: 'bold',
    color: 'black',
    marginTop: 90,
    paddingLeft: 14,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgb(245, 149, 117)',
    fontSize: 80,
    fontFamily: "Courier New",
    right: 15,
    bottom: -15,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
});
