import { FormControl, Text } from 'native-base';
import React, { InputHTMLAttributes } from 'react';
import { Input } from 'native-base';
import { Form, useField } from 'formik';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
  placeholder?: string;
  type: string;
};

export const InputField: React.FC<InputFieldProps> = (props) => {
  const [field, { error }] = useField(props);
  return (
    <Form>
      <FormControl isInvalid={!!error}>
        <FormControl.Label
          htmlFor={props.label}
          _text={{
            color: 'muted.700',
            fontSize: 'xs',
            fontWeight: 500,
          }}>
          {props.label}
        </FormControl.Label>
        <Input
          {...field}
          id={props.label}
          type={props.type}
          placeholder={props.placeholder}
        />
        {error ? <Text>{error}</Text> : null}
      </FormControl>
    </Form>
  );
};
