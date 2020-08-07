import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StatusBar } from 'react-native';
import Navigation from './src/config/navigation'
import Constants from 'expo-constants';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#2e363d"
        barStyle="light-content"
        hidden={false}
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <Navigation />
    </View>
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
