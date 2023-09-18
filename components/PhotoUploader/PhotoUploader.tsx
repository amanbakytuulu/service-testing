import { useAppStore } from '@/stores/Context.store';
import { Box, Button, Input, Typography } from '@mui/material';
import Image from 'next/image';
import { ChangeEvent, FC, useState } from 'react';

interface PhotoUploaderProps {
    onUpload: (url: string) => void
}

export const PhotoUploader: FC<PhotoUploaderProps> = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const { imageUploadStore } = useAppStore();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const url = await imageUploadStore.uploadImage(file);
      setSelectedFile(url || file);

      // Создаем превью фотографии для отображения.
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(url || reader.result?.toString());
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if(!selectedFile) return;
    onUpload(selectedFile);
  };

  return (
    <div>
      <Input
        id="file"
        sx={{ display: 'none' }}
        type="file"
        inputProps={{
          accept: 'image/*',
          onChange: handleFileChange,
        }}
      />
      <Box display="flex" flexDirection="column">
        <label htmlFor="file">
          <Typography sx={{ cursor: 'pointer' }} variant="button" color="teal">
            Выберите файл
          </Typography>
        </label>
        <Button
          onClick={handleUpload}
          disabled={!selectedFile}
          variant="outlined"
          sx={{ width: '30%', alignSelf: 'center', my: 1 }}
        >
          Сохранить
        </Button>
      </Box>
      {previewUrl && <Image src={previewUrl} style={{ objectFit: 'contain' }} alt="Preview" width={300} height={300} />}
    </div>
  );
};
