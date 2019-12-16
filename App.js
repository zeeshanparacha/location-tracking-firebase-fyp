import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/config/navigation'
import Constants from 'expo-constants';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
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
    backgroundColor: '#333846',
    paddingTop: Constants.statusBarHeight,
  },
});
