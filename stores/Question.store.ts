import { types, flow } from 'mobx-state-tree';
import axios from 'axios';
import { Question } from '@/models/questions';

export const QuestionStore = types
  .model('QuestionStore', {
    questions: types.optional(types.array(Question), []),
    loading: types.optional(types.boolean, false),
    error: types.optional(types.string, ''),
  })
  .actions((self) => ({
    fetchQuestions: flow(function* () {
      try {
        self.loading = true;
        self.error = '';
        yield new Promise((resolve) => setTimeout(resolve, 3000));
        const response = yield axios.get('/api/questions');
        self.questions = response.data;
      } catch (error) {
        self.error = 'Произошла ошибка при добавлении пользователя';
        console.error('Failed to fetch questions', error);
      } finally {
        self.loading = false;
      }
    }),
  }));
