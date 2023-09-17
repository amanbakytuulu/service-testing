import { User, UserType } from '@/models/user';
import { flow, types } from 'mobx-state-tree';

export const UserStore = types
  .model('UserStore', {
    user: types.maybeNull(User),
    loading: types.optional(types.boolean, false),
    error: types.optional(types.string, ''),
  })
  .actions((self) => ({
    addUser: flow(function* (user: UserType) {
      try {
        self.loading = true;
        self.error = '';
        yield new Promise((resolve) => setTimeout(resolve, 2000));
        self.user = user;
      } catch (error) {
        self.error = "Произошла ошибка при добавлении пользователя";
        console.error('Failed to fetch user', error);
      } finally { 
        self.loading = false;
      }
    }),
  }));
