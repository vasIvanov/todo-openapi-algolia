import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function SettingsScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Button
        title="Go to Advanced settings"
        onPress={() => navigation.navigate('AdvancedSettings')}
      />
    </View>
  );
}
