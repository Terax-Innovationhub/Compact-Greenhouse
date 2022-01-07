import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {MyDashboard} from '../screens/Dashboard';
import Notifications from '../screens/Notifications';

const Drawer = createDrawerNavigator();


/**
 *
 * @returns a menu like drawer that shows all the links
 */

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="My Dashboard" component={MyDashboard} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}
