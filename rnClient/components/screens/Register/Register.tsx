import * as React from 'react';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useState} from 'react';
import {useAppDispatch} from '../../../store';
import {registerUser} from '../../../store/authSlice';
import AuthForm from '../../organisms/AuthForm';

export default function RegisterScreen({
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
    dispatch(registerUser({formValues, navigation}));
  };

  return (
    <AuthForm
      submitHandler={submitHandler}
      onChangeText={onChangeText}
      formValues={formValues}
      buttonTitle="Register"
    />
  );
}
