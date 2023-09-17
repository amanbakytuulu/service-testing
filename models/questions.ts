import { types } from 'mobx-state-tree';

export const Question = types.model('Question', {
  id: types.identifier,
  text: types.string,
  type: types.string,
});
