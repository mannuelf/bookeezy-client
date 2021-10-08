import React from 'react';
import {
  Box,
  NativeBaseProvider,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';
import { useMutation } from 'urql';

interface IRegister {
  email: string;
  password: string;
  errors: string;
}

const REGISTER_MUTATION = `
  mutation Register($email: String!, $password: String!) {
    register(options: { email: $email, password: $password }) {
      user {
        email
        password
      }
    }
  }`;

const Register: React.FC = () => {
  const [, register] = useMutation(REGISTER_MUTATION);
  const [formData, setData] = React.useState<IRegister>({} as IRegister);
  const [errors, setErrors] = React.useState<IRegister>({} as IRegister);

  const validate = async (): Promise<boolean> => {
    for (let key in formData) {
      if (key === undefined) {
        setErrors({
          ...errors,
          key: `${key} is required`,
        });
        return false;
      } else if (key.length < 3) {
        setErrors({
          ...errors,
          key: `${key} is required`,
        });
        return false;
      }
    }

    await register(formData);
    return true;
  };

  const onSubmit = async () => {
    (await validate())
      ? console.log('Submitted', formData)
      : console.log('Validation failed');
  };

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p="0" w="100%" mx="auto" py="0">
        <Heading size="lg" color="coolGray.800" fontWeight="600">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl isRequired isInvalid={'email' in errors}>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Email
            </FormControl.Label>
            <Input onChangeText={(value) => setData({ ...formData, email: value })} />
            {'email' in errors ? (
              <FormControl.HelperText _text={{ fontSize: 'xs' }}>
                Email should contain at least 3 character.
              </FormControl.HelperText>
            ) : (
              <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                Error Email
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={'password' in errors}>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Password
            </FormControl.Label>
            <Input
              onChangeText={(value) => setData({ ...formData, password: value })}
              type="password"
            />
            {'password' in errors ? (
              <FormControl.HelperText _text={{ fontSize: 'xs' }}>
                Error with password
              </FormControl.HelperText>
            ) : (
              <FormControl.ErrorMessage _text={{ fontSize: 'xs' }}>
                Error Password
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <Button
            onPress={onSubmit}
            mt="2"
            colorScheme="indigo"
            _text={{ color: 'white' }}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
};

export default Register;
