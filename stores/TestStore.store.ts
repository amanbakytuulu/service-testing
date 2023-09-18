import { types, flow } from 'mobx-state-tree';
import { QuestionView } from '@/models/listTests';
import { testView } from '@/mockData';

export const TestStore = types
  .model('TestStore', {
    test: types.maybeNull(QuestionView),
    loading: types.optional(types.boolean, false),
    error: types.optional(types.string, ''),
  })
  .actions((self) => ({
    fetchTest: flow(function* (id: string) {
      try {
        self.loading = true;
        self.error = '';
        yield new Promise((resolve) => setTimeout(resolve, 2000));
        self.test = testView.find((test) => test.id === Number(id));
      } catch (error) {
        self.error = 'Произошла ошибка при получении теста!';
        console.error('Failed to fetch test', error);
      } finally {
        self.loading = false;
      }
    }),
  }));
