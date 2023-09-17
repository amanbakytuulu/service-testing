import {
  Controller,
  Control,
  RegisterOptions,
  Path,
  FieldValues,
} from 'react-hook-form';
import { TextField, TextFieldProps } from '@mui/material';


export type TFormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  rules?: RegisterOptions;
} & Omit<TextFieldProps, 'name'>;

export const FormInput = <TFormValues extends FieldValues>(
  props: TFormInputProps<TFormValues>,
): JSX.Element => {
  const {
    name,
    control,
    rules,
    ...others
  } = props;


  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }): JSX.Element => (
        <TextField
          {...field}
          {...others}
          error={!!error}
          helperText={error?.message}
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  );
};
