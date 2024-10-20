import { Areas } from '../types/area-list.type';
import {
  BrainCircuit,
  ChartBar,
  Computer,
  Gamepad2,
  PenTool,
} from 'lucide-angular';

export const AreasListData: Areas[] = [
  {
    title: 'Design UI/UX',
    description:
      'Área do design que se concentra na criação e aprimoramento das interfaces com as quais os usuários interagem em produtos digitais.',
    icon: PenTool,
  },
  {
    title: 'inteligência artificial (IA)',
    description:
      'Inteligência artificial é uma tecnologia que permite que computadores e máquinas simulem a capacidade de resolução de problemas e a inteligência humana.',
    icon: BrainCircuit,
  },
  {
    title: 'Desenvolvimento Web',
    description:
      'Desenvolvimento web refere-se à criação, construção e manutenção de websites e aplicações web.',
    icon: Computer,
  },
  {
    title: 'Gestão',
    description:
      'Gestão de software refere-se ao processo de supervisão e coordenação de todas as atividades envolvidas no desenvolvimento, implementação e manutenção de software.',
    icon: ChartBar,
  },
  {
    title: 'Games',
    description:
      'O desenvolvimento de games é a arte de criar jogos e descreve o planejamento, desenvolvimento e o lançamento de um jogo. ',
    icon: Gamepad2,
  },
];
