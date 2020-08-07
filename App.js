import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import Navigation from './src/config/navigation'
import Constants from 'expo-constants';



export default function App() {
  return (
    <Fragment>
      <View style={{ backgroundColor: "#2e363d" }}>
        <StatusBar
          backgroundColor="#2e363d"
          barStyle="light-content"
        />
      </View>
      <View style={styles.container}>
        <Navigation />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  statusBar: {
    backgroundColor: "#2e363d",
    // paddingTop: Constants.statusBarHeight,
  },
});
