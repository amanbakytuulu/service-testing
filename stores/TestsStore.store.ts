import { types, flow } from 'mobx-state-tree';
import { Test } from '@/models/listTests';
import { list } from '@/mockData';

export const TestsStore = types
  .model('TestsStore', {
    list: types.optional(types.array(Test), []),
    loading: types.optional(types.boolean, false),
    error: types.optional(types.string, ''),
  })
  .actions((self) => ({
    fetchTests: flow(function* () {
      try {
        self.loading = true;
        self.error = '';
        yield new Promise((resolve) => setTimeout(resolve, 2000));
        self.list = list;
      } catch (error) {
        self.error = 'Произошла ошибка при получении тестов!';
        console.error('Failed to fetch tests', error);
      } finally {
        self.loading = false;
      }
    }),
  }));
