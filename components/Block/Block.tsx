import { ReactElement } from 'react';
import { IBlockProps } from './Block.types';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { Error } from '@mui/icons-material';
import Link from 'next/link';

export const Block = <TData extends object>(props: IBlockProps<TData>): ReactElement | null => {
  const stateBlockStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    width: '100%',
  };

  if (props.error) {
    return (
      <Box sx={stateBlockStyles}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Error color="error" fontSize="large" />
          <Typography variant="h6" color="error">
            Неизвестная ошибка
          </Typography>
          <Link href="/">
            <Button variant="contained">Перейти на главную страницу</Button>
          </Link>
        </div>
      </Box>
    );
  }

  if (props.loading || !props.data) {
    return (
      <Box sx={stateBlockStyles}>
        <CircularProgress />
      </Box>
    );
  }

  return props.children(props.data);
};
