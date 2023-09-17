import { types } from 'mobx-state-tree';
import { QuestionStore } from './Question.store';
import { ImageUploadStore } from './ImageUpload.store';
import { UserStore } from './User.store';

export const RootStore = types.model('RootStore', {
    userStore: types.optional(UserStore, {}),
    questionStore: types.optional(QuestionStore, {}),
    imageUploadStore: types.optional(ImageUploadStore, {}),
  });