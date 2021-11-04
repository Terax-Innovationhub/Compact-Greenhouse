import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function MyDashboard() {
  return (
    <View
      style={
        styles.Screens
        // backgroundColor: 'crimson',
      }>
      <Text>My Dashboard!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Screens: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
