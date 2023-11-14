// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeStack from '../Stack/HomeStack';
import {TransitionPresets} from '@react-navigation/stack';
import SettingsStack from '../Stack/SettingsStack';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',

          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        })}>
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{tabBarBadge: 0}}
        />
        <Tab.Screen name="SettingsTab" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
