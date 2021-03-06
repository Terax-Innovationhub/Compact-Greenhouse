import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import SensorCards from '../Card';

/**
 *
 * @returns The dashboard with all the sensor cards
 */
export default function MyDashboard() {
  return (
    <View style={styles.screens}>
      <SensorCards />
    </View>
  );
}

const styles = StyleSheet.create({
  screens: {
    flex: 1,
  },
});
