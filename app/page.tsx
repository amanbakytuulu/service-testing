'use client';
import { observer } from 'mobx-react-lite';
import { useAppStore } from '@/stores/Context.store';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';
import { Block } from '@/components/Block';

const Home = observer(() => {
  const router = useRouter();
  const { userStore, testsStore } = useAppStore();
  const { fetchTests, list, loading, error } = testsStore;

  useEffect(() => {
    fetchTests();
  }, []);

  if (!userStore.user) {
    router.push('/auth');
    return null;
  }

  return (
    <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h5">
        Все тесты
      </Typography>
      <Block data={list} loading={loading} error={error}>
        {(tests) =>
          tests.length ? (
            <Box my={4} display="flex" justifyContent="center" gap="20px" flexWrap="wrap">
              {tests.map((test) => (
                <Link key={test.id} href={`/test/${test.id}`}>
                  <Card
                    sx={{
                      maxWidth: 350,
                      width: '100%',
                      height: '100%',
                      transition: 'transform 0.2s',
                      textAlign: 'left',
                      '&:hover': {
                        transform: 'scale(1.03)',
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <CardMedia component="img" height="194" image={test.img} />
                    <CardHeader title={test.title} subheader={test.createdAt} />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          WebkitLineClamp: 2,
                          display: '-webkit-box',
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {test.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </Box>
          ) : (
            <Box my={2}>
              <Typography>Нет вакансий</Typography>
            </Box>
          )
        }
      </Block>
    </Box>
  );
});

export default Home;
