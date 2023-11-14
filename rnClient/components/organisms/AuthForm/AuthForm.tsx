import * as React from 'react';
import {View, Button} from 'react-native';
import Input from '../../atoms/Input';

const AuthForm = ({
  onChangeText,
  formValues,
  submitHandler,
  buttonTitle,
}: any) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
      <Input
        label="Username"
        onChangeText={(text: string) =>
          onChangeText({name: 'username', value: text})
        }
        value={formValues.username}
      />
      <Input
        label="Password"
        onChangeText={(text: string) =>
          onChangeText({name: 'password', value: text})
        }
        value={formValues.password}
        secureTextEntry
      />
      <Button title={buttonTitle} onPress={submitHandler} />
    </View>
  );
};

export default AuthForm;
