import { Button, CircularProgress } from '@mui/material';
import React, { FC, useEffect, useRef, useState } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';
import { PreviewProps, VideoRecorderProps } from './MediaRecorder.types';

const Preview: FC<PreviewProps> = ({ stream, audio }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return !audio ? (
    <video ref={videoRef} width={'100%'} autoPlay controls />
  ) : (
    <audio ref={videoRef} autoPlay controls />
  );
};

export const MediaRecorder: FC<VideoRecorderProps> = ({ onVideoRecorded, audio = false }) => {
  const [enable, setEnable] = useState(true);

  return (
    <ReactMediaRecorder
      audio
      video
      blobPropertyBag={{
        type: 'video/webm',
      }}
      render={({ previewStream, status, startRecording, stopRecording, mediaBlobUrl, clearBlobUrl }) => {
        const handleStartRecorded = () => {
          clearBlobUrl();
          startRecording();
          setEnable(true);
        };

        const handleStopRecorded = () => {
          stopRecording();
          setEnable(false);
        };

        const handleSaveRecorder = () => {
          if (mediaBlobUrl) {
            const lastIndex = mediaBlobUrl.lastIndexOf('/');
            const res = mediaBlobUrl.substring(lastIndex + 1);
            onVideoRecorded(res, audio);
          }
        };

        return (
          <>
            <Button onClick={handleStartRecorded}>{mediaBlobUrl ? 'Перезаписать' : 'Запись'}</Button>
            <Button onClick={handleStopRecorded}>Остановить</Button>
            <Button onClick={handleSaveRecorder} disabled={!mediaBlobUrl}>
              Сохранить
            </Button>
            {!enable && audio && <audio src={mediaBlobUrl as string} controls loop />}
            {!enable && !audio && <video src={mediaBlobUrl as string} width={'100%'} controls loop />}
            {enable && <Preview stream={previewStream} audio={audio} />}
            {status === 'acquiring_media' && <div><CircularProgress /></div>}
          </>
        );
      }}
    />
  );
};
