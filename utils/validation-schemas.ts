import { MESSAGE_REQUIRED } from '@/constants';
import * as yup from 'yup';

const now = new Date();

export const authSchema = yup
  .object()
  .shape({
    name: yup.string().required(MESSAGE_REQUIRED),
    lastName: yup.string().required(MESSAGE_REQUIRED),
    birthday: yup.string().required(MESSAGE_REQUIRED).max(now.getTime(), 'Дата рождения не может быть в будущем'),
    age: yup.number().typeError(MESSAGE_REQUIRED).required(MESSAGE_REQUIRED),
  });
