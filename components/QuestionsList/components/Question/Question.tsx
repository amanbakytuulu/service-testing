import React, { ChangeEvent, FC, useState } from 'react';
import {
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  Checkbox,
  FormGroup,
  Typography,
} from '@mui/material';
import { question_case } from '@/constants';
import { MediaRecorder } from '../../../MediaRecorder';
import { PhotoUploader } from '../../../PhotoUploader';
import { AnswerType, QuestionType } from '@/models/listTests';

interface QuestionProps {
    question: QuestionType;
    handleAnswers: (answer: Partial<AnswerType>) => void;
}

export const Question: FC<QuestionProps> = ({ question, handleAnswers }) => {
  const [answer, setAnswer] = useState('');
  const [multipleAnswers, setMultipleAnswers] = useState<string[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    if (question.type === question_case.text) {
      setAnswer(event.target.value);
      handleAnswers({ [name]: value });
    } else if (question.type === question_case.one) {
      setAnswer(event.target.value);
      handleAnswers({ [name]: value });
    } else if (question.type === question_case.multiple) {
      const selectedOptions = [...multipleAnswers];
      if (event.target.checked) {
        selectedOptions.push(event.target.value);
        handleAnswers({ [name]: selectedOptions });
      } else {
        const index = selectedOptions.indexOf(event.target.value);
        if (index !== -1) {
          selectedOptions.splice(index, 1);
        }
      }
      setMultipleAnswers(selectedOptions);
    }
  };

  const handleVideoRecorded = (url: string, audio: boolean) => {
    const type = audio ? 'audio' : 'video';
    handleAnswers({ [type]: url });
  };

  const handleUpload = (url: string) => {
    handleAnswers({ photo: url });
  };

  return (
    <div>
      <Typography>{question.text}</Typography>
      {question.type === question_case.text && (
        <TextField
          fullWidth
          name="title"
          placeholder="Ответ"
          margin="normal"
          multiline
          minRows={3}
          size="small"
          value={answer}
          onChange={handleChange}
        />
      )}
      {question.type === question_case.one && (
        <FormControl component="fieldset">
          <RadioGroup value={answer} onChange={handleChange}>
            {question.options?.map((option, index) => (
              <FormControlLabel key={index} name="option" value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </FormControl>
      )}
      {question.type === question_case.multiple && (
        <FormControl component="fieldset">
          <FormGroup>
            {question.options?.map((option, index) => (
              <FormControlLabel
                key={index}
                name="options"
                control={<Checkbox />}
                label={option}
                value={option}
                checked={multipleAnswers.includes(option)}
                onChange={handleChange as any}
              />
            ))}
          </FormGroup>
        </FormControl>
      )}
      {question.type === question_case.video && <MediaRecorder onVideoRecorded={handleVideoRecorded} />}
      {question.type === question_case.audio && <MediaRecorder onVideoRecorded={handleVideoRecorded} audio />}
      {question.type === question_case.photo && <PhotoUploader onUpload={handleUpload} />}
    </div>
  );
};
