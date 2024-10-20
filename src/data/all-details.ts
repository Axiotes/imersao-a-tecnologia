import { AllDetails } from '../types/all-details.type';

export const allDetails: AllDetails[] = [
  {
    slug: 'front-end',
    infoDetails: [
      {
        title: 'Primeiros passos no mundo web',
        subtitle: 'HTML e CSS',
        text: 'Html e Css são as tecnologias bases para criar toda a base da sua aplicação web. Html: Você consegue criar toda a base de conteúdos e estrutura da sua página. Css: você consegue controlar toda estilo da página, aplicando cores, layouts e outros aspectos visuais.',
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
        text: 'Essa linguagem de programação permite a interatividade e a dinâmica da sua página web.',
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
        text: 'Uma evolução do Javascript. O TypeScript é uma linguagem que adiciona tipos estáticos ao JavaScript, o que permite detectar erros em tempo de compilação. O que melhora a organização de projetos e facilita a escalabilidade do código.',
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
        title: 'Frameworks',
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
  {
    slug: 'back-end',
    infoDetails: [
      {
        title: 'Introdução a Java',
        subtitle: 'Java',
        text: 'Uma linguagem de programação orientada a objetos,  muito conhecida por sua portabilidade, segurança e performance. Venha aprender sobre essa linguagem Back-end incrível!',
        videos: [
          {
            title: 'Rocketseat | Java',
            link: 'https://app.rocketseat.com.br/journey/minicurso-java/overview',
          },
          {
            title: 'Curso em Vídeo | Java',
            link: 'https://www.youtube.com/watch?v=sTX0UEplF54&list=PLHz_AreHm4dkI2ZdjTwZA4mPMxWTfNSpR',
          },
        ],
      },
      {
        title: 'Framework Spring',
        subtitle: 'Spring',
        text: 'Os frameworks no desenvolvimento web são bibliotecas ou estruturas pré-escritas para facilitar o desenvolvimento de interfaces na web. Eles oferecem ferramentas, componentes e funcionalidades reutilizáveis para ajudar os desenvolvedores a contruir o código de maneira eficiente. O Spring oferece uma infraestrutura completa para criar aplicações robustas, escaláveis e fáceis de manter.',
        videos: [
          {
            title: 'Código Fonte | Spring',
            link: 'https://www.youtube.com/watch?v=j_F0cz0em04',
          },
          {
            title: 'Michelli Brito | Aplicação Spring',
            link: 'https://www.youtube.com/watch?v=OHn1jLHGptw&list=PL8iIphQOyG-DHLpEx1TPItqJamy08fs1D&index=3',
          },
          {
            title: 'Michelli Brito | Curso Spring',
            link: 'https://www.youtube.com/watch?v=wlYvA2b1BWI',
          },
        ],
      },
      {
        title: 'Banco de Dados',
        subtitle: 'SQL',
        text: 'Banco de dados serve para armazenar e organizar dados, estruturados de forma que consiga acessar, atualizar, ou remover qualquer dado. Além de gerenciar dados de maneira eficiente. SQL é a linguagem padrão para manipular e consultar bancos de dados relacionais. Aprenda a criar, atualizar e consultar dados em um banco de dados.',
        videos: [
          {
            title: 'Código Fonte | SQL',
            link: 'https://www.youtube.com/watch?v=kMznyI7r2Tc',
          },
          {
            title: 'Otávio Mirando | SQL Curso',
            link: 'https://www.youtube.com/watch?v=lHYV_H1526Q&list=PLbIBj8vQhvm2WT-pjGS5x7zUzmh4VgvRk',
          },
          {
            title: 'Biblioteca Rocketseat SQL Curso',
            link: 'https://biblioteca.rocketseat.com.br/sql/sql/overview-do-curso',
          },
        ],
      },
    ],
  },
  {
    slug: 'design',
    infoDetails: [],
  },
];
