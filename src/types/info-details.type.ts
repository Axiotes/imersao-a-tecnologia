import { Videos } from './videos.type';

export type InfoDetails = {
  title: string;
  subtitle: string;
  text?: string;
  videos: Videos[];
};
