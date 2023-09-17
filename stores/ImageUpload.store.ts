import { types, flow } from 'mobx-state-tree';
import axios from 'axios';

export const ImageUploadStore = types
  .model('ImageUploadStore', {
    uploadedImageUrl: types.optional(types.string, ''),
    loading: types.optional(types.boolean, false),
    error: types.optional(types.string, ''),
  })
  .actions((self) => ({
    uploadImage: flow(function* (imageFile) {
      try {
        self.loading = true;
        self.error = '';

        const formData = new FormData();
        formData.append('key', '6d207e02198a847aa98d0a2a901485a5');
        formData.append('action', 'upload');
        formData.append('source', imageFile);

        const response = yield axios.post('https://freeimage.host/api/1/upload', formData);

        self.uploadedImageUrl = response.data.image.url;
      } catch (error) {
        self.error = 'Произошла ошибка при добавлении пользователя';
        console.error('Failed to upload image', error);
      } finally {
        self.loading = false;
      }
    }),
  }));
