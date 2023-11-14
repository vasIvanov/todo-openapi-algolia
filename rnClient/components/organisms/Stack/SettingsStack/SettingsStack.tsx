import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SettingsScreen from '../../../screens/Settings';
import AdvancedSettingsScreen from '../../../screens/Settings/AdvancedSettings';

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        name="AdvancedSettings"
        component={AdvancedSettingsScreen}
      />
    </Stack.Navigator>
  );
}
