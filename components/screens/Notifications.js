import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 *
 * @returns returns the notification screen with all notifications
 */
export default function Notifications() {
  <View styles={styles.Notifications}>
    <Text>This is the notifications page!</Text>
  </View>;
}

const styles = StyleSheet.create({
  Notifications: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
