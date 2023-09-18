import { types, flow } from 'mobx-state-tree';
import { FREE_IMAGE_KEY } from '@/constants';
import { api } from '@/config/api';

export const ImageUploadStore = types
  .model('ImageUploadStore', {
    loading: types.optional(types.boolean, false),
    error: types.optional(types.string, ''),
  })
  .actions((self) => ({
    uploadImage: flow(function* (imageFile) {
      try {
        self.loading = true;
        self.error = '';

        const formData = new FormData();
        formData.append('key', FREE_IMAGE_KEY);
        formData.append('action', 'upload');
        formData.append('source', imageFile);

        const response = yield api.post('api/1/upload', formData);
        
        return response.data.image.url;
      } catch (error) {
        self.error = 'Произошла ошибка при отправке фото';
        console.error('Ошибка при отправке запроса на сервер', error);
      } finally {
        self.loading = false;
      }
    }),
  }));
