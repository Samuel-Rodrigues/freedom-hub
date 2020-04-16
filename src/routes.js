import React from 'react';
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SingnIn from './pages/SingnIn/index'
import SignUp from './pages/SignUp/index'
import Dashboard from './pages/DashBoard/index';
import AddDevice from './pages/AddDevice/index'
import Profile from './pages/Profile/index'

import DeviceConfiguration from './pages/DeviceConfiguration/index'

const Stack = createStackNavigator();

// Tabs
const Tab = createBottomTabNavigator();


const DeviceConfigurationPages = () => (
  <Stack.Navigator
    resetOnBlur="true"
    screenOptions={{
      headerTransparent: true,
      headerTintColor: '#FFF',
      headerLeftContainerStyle: {
        marginLeft: 20,
      },
    }}
  >
    <Stack.Screen name="Dashboard" component={Dashboard} options={{
      headerTitle: '',
    }} />
    <Stack.Screen name="DeviceConfiguration" component={DeviceConfiguration} />
  </Stack.Navigator>
)

function Routes({ singnIn = false }) {
  return (
    <NavigationContainer>
      {!singnIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="SingnIn"
            component={SingnIn}
            options={{
              headerTitle: '',
              headerTransparent: true,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerTitle: '',
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      ) : (
          <Tab.Navigator
            resetOnBlur
            tabBarOptions={{
              keyboardHidesTabBar: true, //Para funcionar no android vamos no manifest e alterar: android:windowSoftInputMode="adjustPan">
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255, 0.3)',
              style: {
                paddingTop: 2,
                backgroundColor: '#145DC6',
              },
            }}>
            <Tab.Screen
              name="DeviceConfigurationPages"
              component={DeviceConfigurationPages}
              options={{
                tabBarLabel: 'Meus dispositivos',
                tabBarIcon: () => <Icon name="device-hub" size={33} color="#fff" />,
              }}
            />
            <Tab.Screen
              name="New"
              component={AddDevice}
              options={{
                tabBarLabel: 'Adicionar dispositivo',
                tabBarIcon: () => <Icon name="add" size={40} color="#fff" />,
              }}
            />
            <Tab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarLabel: 'Meu perfil',
                tabBarIcon: () => <Icon name="person" size={33} color="#fff" />,
              }}
            />
          </Tab.Navigator>
        )}
    </NavigationContainer>
  );
}

export default Routes
