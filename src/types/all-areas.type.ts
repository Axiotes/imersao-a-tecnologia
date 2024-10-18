import { LucideIconData } from 'lucide-angular/icons/types';
import { Infos } from './infos.type';

export type AllAreas = {
  slug: string;
  title: string;
  description: string;
  text: string;
  infos: Infos[];
  infoText: string;
  icon: LucideIconData;
};
