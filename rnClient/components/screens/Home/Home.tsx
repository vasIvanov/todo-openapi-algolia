import * as React from 'react';
import {View, Button} from 'react-native';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useAppSelector} from '../../../store';
import {selectCurrentUser} from '../../../store/authSlice';

export default function HomeScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const user = useAppSelector(selectCurrentUser);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {!!user && (
        <Button
          title="Go to Todos"
          onPress={() => navigation.navigate('Todos')}
        />
      )}
    </View>
  );
}
