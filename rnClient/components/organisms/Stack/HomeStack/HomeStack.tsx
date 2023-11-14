import * as React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import HomeScreen from '../../../screens/Home';
import TodosScreen from '../../../screens/Todos';
import ModalComponent from '../../../molecules/Modal';
import {Button} from 'react-native';
import RegisterScreen from '../../../screens/Register';
import {useAppDispatch, useAppSelector} from '../../../../store';
import {logoutUser, selectCurrentUser} from '../../../../store/authSlice';
import LoginScreen from '../../../screens/Login';

const Stack = createStackNavigator();

export default function HomeStack({navigation}: any) {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  console.log(user);

  const HomeHeaderRight = () =>
    !!user ? (
      <Button
        title="Logout"
        onPress={() => {
          dispatch(logoutUser({navigation}));
        }}
      />
    ) : (
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    );

  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: HomeHeaderRight,
          headerLeft: () =>
            !user && (
              <Button
                title="Register"
                onPress={() => navigation.navigate('Register')}
              />
            ),
        }}
      />
      {!!user && (
        <Stack.Screen
          name="Todos"
          component={TodosScreen}
          options={{
            headerRight: () => <ModalComponent />,
          }}
        />
      )}
      {!user && <Stack.Screen name="Register" component={RegisterScreen} />}
      {!user && <Stack.Screen name="Login" component={LoginScreen} />}
      {/* <Stack.Screen name="Settings" component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
}
