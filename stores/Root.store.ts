import { types } from 'mobx-state-tree';
import { TestsStore } from './TestsStore.store';
import { ImageUploadStore } from './ImageUpload.store';
import { UserStore } from './User.store';
import { TestStore } from './TestStore.store';

export const RootStore = types.model('RootStore', {
    userStore: types.optional(UserStore, {}),
    testsStore: types.optional(TestsStore, {}),
    testStore: types.optional(TestStore, {}),
    imageUploadStore: types.optional(ImageUploadStore, {}),
  });