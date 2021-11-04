import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detals')}
      />
    </View>
  );
}

// function DetailsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

function MyDashboard() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>My Dashboard!</Text>
    </View>
  );
}

function AllRooms() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>All Rooms!</Text>
    </View>
  );
}

function AllSensors() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
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
  TabNavigation: {},
});
