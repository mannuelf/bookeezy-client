import React from 'react';
import { Formik, Form } from 'formik';
import { Box, Heading, VStack, FormControl, Input, Link, HStack } from 'native-base';
import { Button } from 'react-native';

interface registerProps {
  username: string;
  password: string;
}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}>
      <Form>
        <Box safeArea flex={1} p="2" w="90%" mx="auto" py="8">
          <Heading size="lg" color="coolGray.800" fontWeight="600">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            Sign up to continue!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label
                _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
                Email
              </FormControl.Label>
              <Input />
            </FormControl>
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
            <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
              Sign up
            </Button>
          </VStack>
        </Box>
      </Form>
    </Formik>
  );
};

export default Register;
