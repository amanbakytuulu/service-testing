'use client';

import React, { useEffect, useState } from 'react';
import { useAppStore } from '@/stores/Context.store';
import { observer } from 'mobx-react';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { Block } from '@/components/Block';
import Image from 'next/image';
import Link from 'next/link';
import { QuestionsList } from '@/components/QuestionsList';

const Test = observer(({ params }: { params: { id: string } }) => {
  const { testStore } = useAppStore();
  const [start, setStart] = useState(false);
  const { fetchTest, test, loading, error } = testStore;

  const handleChange = () => {
    setStart(!start);
  };

  useEffect(() => {
    fetchTest(params.id);
  }, []);

  const stylesBox = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    gap: 3,
  };

  return (
    <Box sx={stylesBox}>
      <Typography variant="h4">Тестирование</Typography>
      <Block data={test} loading={loading} error={error}>
        {(tst) =>
          tst.questions ? (
            start ? (
              <QuestionsList questions={tst.questions} />
            ) : (
              <Box
                bgcolor="Background"
                borderRadius={5}
                p={5}
                sx={stylesBox}
              >
                <Avatar src={tst.img} sx={{ width: 200, height: 200, textAlign: 'center' }} />
                <Typography variant={'h4'}>{tst.title}</Typography>
                <Button variant="contained" onClick={handleChange}>
                  Начать
                </Button>
                <Typography fontSize={16}>{tst.description}</Typography>
              </Box>
            )
          ) : (
            <>
              <Image src={'/static/questionEmpty.png'} alt="empty question" width={500} height={500} />
              <Typography variant="h5">Вопросы отсуствуют</Typography>
              <Link href={'/'}>
                <Button>На главное</Button>
              </Link>
            </>
          )
        }
      </Block>
    </Box>
  );
});

export default Test;
