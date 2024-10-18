import { AllDetails } from '../types/all-details.type';

export const allDetails: AllDetails[] = [
  {
    slug: 'front-end',
    infoDetails: [
      {
        title: 'Primeiros passos no mundo web',
        subtitle: 'HTML e CSS',
        videos: [
          {
            title: 'Rocketseat | Curso Discover',
            link: 'https://app.rocketseat.com.br/journey/discover/contents',
          },
          {
            title: 'Curso em Vídeo | HTML5 e CSS3',
            link: 'https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n',
          },
        ],
      },
      {
        title: 'Conhecendo o Javascript',
        subtitle: 'JavaScript',
        videos: [
          {
            title: 'Rocketseat | Curso Discover',
            link: 'https://app.rocketseat.com.br/journey/discover/contents',
          },
          {
            title: 'Programação Web | Javascript',
            link: 'https://www.youtube.com/watch?v=vEwPnjqWQ-g&list=PL2Fdisxwzt_d590u3uad46W-kHA0PTjjw',
          },
          {
            title: 'Biblioteca Rocketseat',
            link: 'https://biblioteca.rocketseat.com.br/javascript/primeiros-passos/abertura-13',
          },
        ],
      },
      {
        title: 'Aprendendo o Typescript',
        subtitle: 'TypeScript',
        videos: [
          {
            title: 'Biblioteca Rocketseat',
            link: 'https://biblioteca.rocketseat.com.br/typescript/especializar-typescript/abertura-18',
          },
          {
            title: 'Programação Web | Typescript',
            link: 'https://www.youtube.com/watch?v=svUEOLz-tms',
          },
        ],
      },
      {
        title: 'Framework',
        subtitle: 'Angular e React',
        text: 'Os frameworks no desenvolvimento web são bibliotecas ou estruturas pré-escritas para facilitar o desenvolvimento de interfaces na web. Eles oferecem ferramentas, componentes e funcionalidades reutilizáveis para ajudar os desenvolvedores a contruir o código de maneira eficiente.',
        videos: [
          {
            title: 'Matheus Battisti | Angular',
            link: 'https://www.youtube.com/watch?v=vJt_K1bFUeA&list=PLnDvRpP8Bnex2GQEN0768_AxZg_RaIGmw',
          },
          {
            title: 'Documentação React',
            link: 'https://pt-br.react.dev/learn',
          },
          {
            title: 'Biblioteca Rocketseat',
            link: 'https://biblioteca.rocketseat.com.br/react-js/especializar-react/abertura-17',
          },
        ],
      },
    ],
  },
];
