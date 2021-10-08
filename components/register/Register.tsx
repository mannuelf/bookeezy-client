import React, { InputHTMLAttributes } from 'react';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import {
  NativeBaseProvider,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';
import { InputField } from '../InputField';

export default function Register(): JSX.Element {
  const onSubmit = () => {
    console.log('Submitted');
  };

  return (
    <NativeBaseProvider>
      <Box safeArea flex={1} p="2" w="100%" mx="auto" py="8">
        <Heading size="lg" color="coolGray.800" fontWeight="600">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign up today to start uploading and sharing books.
        </Heading>

        <VStack space={3} mt="5">
          <InputField
            id="firstName"
            name="firstName"
            placeholder="First name"
            type="text"
            label="First Name"
          />
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Password
            </FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Confirm Password
            </FormControl.Label>
            <Input type="password" />
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
}
