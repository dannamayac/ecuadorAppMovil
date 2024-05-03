import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../screens/Login/Login';
import Authentication from '../screens/Login/Aunthentication';
import Home from '../screens/Home/Home';
import SideBar from '../components/SideBar';
import Income from '../screens/Income/Income';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <SideBar {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Income" component={Income} />
    </Drawer.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Main" component={DrawerNavigator} options={{ gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
