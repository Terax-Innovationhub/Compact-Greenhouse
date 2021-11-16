import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import SensorCards from '../Card';

export default function MyDashboard() {
  return (
    <View
      style={
        styles.screens
        // backgroundColor: 'crimson',
      }>
      <SensorCards />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // backgroundColor: '#f18484',
    // justifyContent: 'center', //Centered vertically
    // alignItems: 'center', //Centered horizontally
  },
  container: {
    flex: 1,
    // margin: 16, // Centered horizontally
  },
  screens: {
    backgroundColor: 'red',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  sectionTitle: {
    // fontSize: 24,
    // fontWeight: '600',
    // color: 'white',
  },
});
