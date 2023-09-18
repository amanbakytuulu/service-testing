export const MESSAGE_REQUIRED = 'Обязательное поле';

export enum question_case {
    text = 'text',
    one = 'one',
    multiple = 'multiple',
    audio = 'audio',
    video = 'video',
    photo = 'photo',
}

export const FREE_IMAGE_KEY = process.env.NEXT_PUBLIC_FREE_IMG_KEY || '';
export const FREE_IMAGE_URL = process.env.NEXT_PUBLIC_API_FREE_IMG_URL || '';