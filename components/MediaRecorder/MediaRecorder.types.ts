export interface VideoRecorderProps {
    audio?: boolean;
    onVideoRecorded: (url: string, audio: boolean) => void
}

export interface PreviewProps {
    stream: MediaStream | null;
    audio: boolean;
}