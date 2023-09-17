import { SnapshotIn, types } from 'mobx-state-tree';

export const User = types.model('User', {
  name: types.string,
  lastName: types.string,
  birthday: types.string,
  age: types.number,
});

export type UserType =  SnapshotIn<typeof User>;