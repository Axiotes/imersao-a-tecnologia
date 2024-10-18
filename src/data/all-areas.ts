import { Computer } from 'lucide-angular';
import { AllAreas } from '../types/all-areas.type';

export const AllAreasData: AllAreas[] = [
  {
    slug: 'design',
    title: 'Design UI/UX',
    description:
      'Lorem ipsum dolor sit amet. Qui assumenda galisum et nihil libero id iusto quia sed',
    text: '',
    infos: [],
    infoText: '',
    icon: Computer,
  },
  {
    slug: 'ia',
    title: 'inteligência artificial (IA)',
    description:
      'Lorem ipsum dolor sit amet. Qui assumenda galisum et nihil libero id iusto quia sed',
    text: '',
    infos: [],
    infoText: '',
    icon: Computer,
  },
  {
    slug: 'dev-web',
    title: 'Desenvolvimento Web',
    description:
      'Lorem ipsum dolor sit amet. Qui assumenda galisum et nihil libero id iusto quia sed',
    text: 'O profissional que trabalha no desenvolvimento web é conhecido como web developer ou programador. Ele é responsável por criar a estrutura de um site, desde o planejamento do layout até a manutenção de tudo o que é processado na plataforma.',
    infos: [
      {
        slug: 'front-end',
        title: 'Front-end',
        description:
          'O desenvolvimento front-end é a área da programação que se concentra na parte visual de um site ou aplicativo, com foco na experiência do usuário. Desenvolvendo a parte visual(html e css) e aplicando interatividade na página com JavaScript. Garantindo também que o site funcione corretamente com um ótimo desempenho e disponibilidade para navegadores e diferentes dispositivos',
        tags: ['HTML', 'CSS', 'JavaScript'],
        links: [],
      },
      {
        slug: 'back-end',
        title: 'Back-end',
        description: '',
        tags: [],
        links: [],
      },
    ],
    infoText:
      'Para se tornar um desenvolvedor web, é preciso dominar linguagens de programação, bibliotecas e frameworks. A área de desenvolvimento web é dividido em duas partes: Front-end e Back-end.',
    icon: Computer,
  },
  {
    slug: 'gestao',
    title: 'Gestão',
    description:
      'Lorem ipsum dolor sit amet. Qui assumenda galisum et nihil libero id iusto quia sed',
    text: '',
    infos: [],
    infoText: '',
    icon: Computer,
  },
  {
    slug: 'games',
    title: 'Games',
    description:
      'Lorem ipsum dolor sit amet. Qui assumenda galisum et nihil libero id iusto quia sed',
    text: '',
    infos: [],
    infoText: '',
    icon: Computer,
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    description:
      'Lorem ipsum dolor sit amet. Qui assumenda galisum et nihil libero id iusto quia sed',
    text: '',
    infos: [],
    infoText: '',
    icon: Computer,
  },
];
