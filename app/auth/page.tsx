'use client';
import Container from '@mui/material/Container';
import { useAppStore } from '@/stores/Context.store';
import { useRouter } from 'next/navigation';
import { Box, InputAdornment, Typography } from '@mui/material';
import { FormInput } from '@/components/ui/Form';
import { UserType } from '@/models/user';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from '@/utils/validation-schemas';
import { AccountCircle, Celebration, EmojiPeople } from '@mui/icons-material';
import { LoadingButton } from '@/components/ui/Button';
import { observer } from 'mobx-react';

const Authorization = observer(() => {
  const router = useRouter();
  const { userStore } = useAppStore();
  const { addUser, loading } = userStore;

  const { handleSubmit, control } = useForm<UserType>({
    defaultValues: {
      name: '',
      lastName: '',
      birthday: '',
      age: 0,
    },
    resolver: yupResolver(authSchema),
  });

  const onSubmit = async (data: UserType) => {
    const { name, lastName, birthday, age } = data;
    await addUser({ name, lastName, birthday, age: Number(age) });
    router.push('/');
  };

  return (
    <Container
      maxWidth={'xs'}
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4">Авторизация</Typography>
      <Typography gutterBottom>Заполните чтобы получить доступ к тестам</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          fullWidth
          label="Имя"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          name="name"
          control={control}
          disabled={loading}
          margin="normal"
        />
        <FormInput
          label="Фамилия"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          name="lastName"
          fullWidth
          control={control}
          disabled={loading}
          margin="normal"
        />
        <FormInput
          fullWidth
          label="Дата рождения"
          type="date"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Celebration />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          name="birthday"
          control={control}
          disabled={loading}
          margin="normal"
        />
        <FormInput
          fullWidth
          label="Возраст"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmojiPeople />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          type="number"
          name="age"
          control={control}
          disabled={loading}
          margin="normal"
        />
        <LoadingButton fullWidth type="submit" variant="contained" loading={loading} disabled={loading}>
          Войти
        </LoadingButton>
      </Box>
    </Container>
  );
});

export default Authorization;
