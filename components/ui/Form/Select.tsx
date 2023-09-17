import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from '@mui/material';


export interface ISelectOptions {
  label: string;
  value: string | number;
}

export type TFormSelectProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  rules?: RegisterOptions;
  options: ISelectOptions[];
} & Omit<SelectProps, 'name'>;

export const FormSelect = <TFormValues extends FieldValues>(
  props: TFormSelectProps<TFormValues>,
): JSX.Element => {
  const {
    name,
    control,
    rules,
    label,
    options,
    ...others
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }): JSX.Element => (
        <FormControl
          fullWidth
          error={!!error}
        >
          {label && (
            <InputLabel id={name}>
              {label}
            </InputLabel>
          )}

          <Select
            label={label}
            {...field}
            {...others}
          >
            {options.map((option) => (
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
