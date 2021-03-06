import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MyDashboard from '../screens/Dashboard';

/**
 *
 * @returns all rooms from the screens
 */
function AllRooms() {
  return (
    <View
      style={
        styles.Screens
        // backgroundColor: 'lightgreen',
      }>
      <Text>All Rooms!</Text>
    </View>
  );
}

/**
 *
 * @returns All sensors from the database
 */
function AllSensors() {
  return (
    <View
      style={
        styles.Screens
        // backgroundColor: 'lightblue',
      }>
      <Text>All Sensors!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="My Dashboard"
          component={MyDashboard}
          options={{title: 'My dashboard'}}
        />
        <Tab.Screen
          name="All Rooms"
          component={AllRooms}
          options={{title: 'All Rooms'}}
        />
        <Tab.Screen name="All Sensors" component={AllSensors} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  Screens: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
