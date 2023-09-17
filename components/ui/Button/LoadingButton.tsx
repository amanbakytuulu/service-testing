import { FC } from 'react';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

export interface ILoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

export const LoadingButton: FC<ILoadingButtonProps> = (props) => {
  const {
    loading,
    children,
    ...others
  } = props;

  return (
    <Button {...others}>
      {loading
        ? <CircularProgress color="inherit" size="1.5rem" />
        : children
      }
    </Button>
  );
};
