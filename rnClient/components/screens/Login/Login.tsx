import * as React from 'react';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useState} from 'react';
import {useAppDispatch} from '../../../store';
import {loginUser} from '../../../store/authSlice';
import AuthForm from '../../organisms/AuthForm';

export default function LoginScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const dispatch = useAppDispatch();
  const [formValues, setFormValues] = useState({
    username: '',
    password: '',
  });

  const onChangeText = (data: any) => {
    setFormValues(prevState => ({
      ...prevState,
      [data.name]: data.value,
    }));
  };

  const submitHandler = () => {
    dispatch(loginUser({formValues, navigation}));
  };

  return (
    <AuthForm
      submitHandler={submitHandler}
      onChangeText={onChangeText}
      formValues={formValues}
      buttonTitle="Login"
    />
  );
}
