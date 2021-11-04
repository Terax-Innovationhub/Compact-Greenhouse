import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function MyDashboard() {
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
      <Tab.Navigator style={styles.TabNavigation}>
        <Tab.Group
          screenOptions={{
            headerTintColor: 'black',
            headerTitleStyle: {fontWeight: 'bold'},
          }}>
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
        </Tab.Group>
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
