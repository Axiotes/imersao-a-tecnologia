import {
  BrainCircuit,
  ChartBar,
  Computer,
  DatabaseZap,
  Gamepad2,
  PenTool,
} from 'lucide-angular';
import { AllAreas } from '../types/all-areas.type';

export const AllAreasData: AllAreas[] = [
  {
    slug: 'design',
    title: 'Design UI/UX',
    description:
      'Concentra na criação e aprimoramento das interfaces com as quais os usuários interagem em produtos digitais.',
    text: 'A área de design UI/UX envolve a construir e aprimorar de interfaces e experiências de usuário em produtos digitais, como sites, aplicativos e sistemas. UI (User Interface): Diz respeito a criação da parte visual de um app ou site, aplicando cores, layouts, ícones, botões e outros aspectos que dão vida ao projeto. UX (User Experience): Está relacionado a toda experiência que o usuário irá passar interagindo com com a página, tendo a responsabilidade de entender a visão do usuário sob o produto, garantindo navegação fluida e fácil e aspectos assesíveis para qualquer pessoa.',
    infos: [
      {
        slug: 'design',
        title: 'Design',
        description: '',
        tags: ['Design UI', 'Design UX'],
      },
    ],
    infoText: '',
    icon: PenTool,
    typeInfo: 'details',
  },
  {
    slug: 'ia',
    title: 'Inteligência artificial',
    description:
      'Permite que computadores e máquinas simulem a capacidade de resolução de problemas e a inteligência humana.',
    text: 'A inteligência Artificial é uma área que busca desenvolver sistemas com capacidade de simular uma inteligência humana. Basicamente consiste em criar máquinas que posso elas mesmas aprender, raciocinar, tomar decisões e resolver problemas e tarefas de forma autônoma. É uma área que exige que tenha conhecimento em Python(linguagem de programação muito utilizada para IA) e matemática(estatísticas, álgebra e cálculos).',
    infos: [
      {
        slug: 'ia',
        title: 'Inteligência Artificial',
        description: '',
        tags: ['Python', 'Machine Learning', 'Matemática'],
      }
    ],
    infoText: '',
    icon: BrainCircuit,
    typeInfo: 'details',
  },
  {
    slug: 'dev-web',
    title: 'Desenvolvimento Web',
    description:
      'Criação, construção e manutenção de websites e aplicações web.',
    text: 'O profissional que trabalha no desenvolvimento web é conhecido como web developer ou programador. Ele é responsável por criar a estrutura de um site, desde o planejamento do layout até a manutenção de tudo o que é processado na plataforma.',
    infos: [
      {
        slug: 'front-end',
        title: 'Front-end',
        description:
          'O desenvolvimento front-end é a área da programação que se concentra na parte visual de um site ou aplicativo, com foco na experiência do usuário. Desenvolvendo a parte visual(html e css) e aplicando interatividade na página com JavaScript. Garantindo também que o site funcione corretamente com um ótimo desempenho e disponibilidade para navegadores e diferentes dispositivos',
        tags: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        slug: 'back-end',
        title: 'Back-end',
        description:
          'O desenvolvimento back-end é a área responsável por tudo que acontece por trás de um site ou aplicativo. Ele envolve a criação e gerenciamento de servidores, bancos de dados e APIs que garantem o funcionamento correto das funcionalidades do sistema. Fazendo o processamento de solicitações dos usuários, realiza operações lógicas, acessa e armazena dados de forma segura, e retorna as respostas apropriadas para o front-end.',
        tags: ['Java', 'SQL', 'Spring'],
      },
    ],
    infoText:
      'Para se tornar um desenvolvedor web, é preciso dominar linguagens de programação, bibliotecas e frameworks. A área de desenvolvimento web é dividido em duas partes: Front-end e Back-end.',
    icon: Computer,
    typeInfo: 'all',
  },
  {
    slug: 'gestao',
    title: 'Gestão',
    description:
      'Supervisão e coordenação das atividades envolvidas no desenvolvimento e implementação de software.',
    text: '',
    infos: [],
    infoText: '',
    icon: ChartBar,
    typeInfo: 'details',
  },
  {
    slug: 'games',
    title: 'Games',
    description:
      'Arte de criar jogos e descreve o planejamento, desenvolvimento e o lançamento de um jogo.',
    text: '',
    infos: [],
    infoText: '',
    icon: Gamepad2,
    typeInfo: 'details',
  },
  {
    slug: 'data-science',
    title: 'Data Science',
    description:
      'A ciência de dados é uma prática que busca resolver problemas complexos através da análise de dados avançada',
    text: '',
    infos: [],
    infoText: '',
    icon: DatabaseZap,
    typeInfo: 'details',
  },
];
