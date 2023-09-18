import { question_case } from '@/constants';
import { SnapshotIn, types } from 'mobx-state-tree';

const validQuestionTypes = Object.values(question_case);

export interface AnswerType {
  title: string,
  option: string,
  options: string[],
  audio: string,
  video: string,
  photo: string,
}

export const Question = types.model('Question', {
  id: types.identifierNumber,
  text: types.string,
  type: types.enumeration('QuestionType', validQuestionTypes),
  options: types.optional(types.array(types.string), []),
})

export const Test = types.model('ListTest', {
  id: types.identifierNumber,
  img: types.string,
  title: types.string,
  description: types.string,
  createdAt: types.string,
});

export const QuestionView = types.model('QuestionView', {
  id: types.identifierNumber,
  img: types.string,
  title: types.string,
  description: types.string,
  questions: types.optional(types.array(Question), []),
  createdAt: types.string,
});

export type QuestionType = SnapshotIn<typeof Question>;
export type QuestionViewType = SnapshotIn<typeof QuestionView>;
export type TestType = SnapshotIn<typeof Test>;
