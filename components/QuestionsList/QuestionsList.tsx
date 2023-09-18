import React, { FC, useState } from 'react';
import { Question } from './components/Question';
import { Box, Button, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { AnswerType, QuestionType } from '@/models/listTests';

interface QuestionsListProps {
    questions: QuestionType[]
}

export const QuestionsList: FC<QuestionsListProps> = ({ questions }) => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswers = (answer: Partial<AnswerType>) => {
    setAnswers((prev) => ({ ...prev, ...answer }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleFinish = () => {
    console.log('Завершение теста, ответы:', answers);
    router.push('/');
  };
  return (
    <Box width={600} bgcolor="AppWorkspace" borderRadius="10px" padding={2}>
      <Typography variant="body2" textAlign="left">{`${currentQuestion + 1}/${questions.length} `}</Typography>
      <Question question={questions[currentQuestion]} handleAnswers={handleAnswers} />

      {currentQuestion < questions.length - 1 && (
        <Button variant="contained" onClick={handleNext}>
          Далее
        </Button>
      )}
      {currentQuestion === questions.length - 1 && (
        <Button variant="contained" color="success" onClick={handleFinish}>
          Завершить
        </Button>
      )}
    </Box>
  );
};
