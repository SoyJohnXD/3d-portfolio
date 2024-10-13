export const navLinks = [
  {
    id: 1,
    name: "Inicio",
    href: "#home",
  },
  {
    id: 2,
    name: "Sobre mi",
    href: "#about",
  },
  {
    id: 3,
    name: "Experiencia",
    href: "#experience",
  },
  {
    id: 3,
    name: "Proyectos",
    href: "#work",
  },
  {
    id: 4,
    name: "Contacto",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Sediel Ruiz",
    position: "Development manager - Wepayu Latam",
    img: "assets/sediel_ruiz.jpg",
    review:
      "John es un profesional con una gran capacidad de escucha y adaptación. En cada problema que enfrentamos, fue proactivo al proponer soluciones y siempre mostró un gran compromiso con el éxito del equipo. Su actitud positiva es contagiosa y hace que trabajar con él sea muy agradable.",
  },
  {
    id: 2,
    name: "Diego Chacón",
    position: "Desarrollador Fullstack - Intevo",
    img: "assets/diego_chacon.jpg",
    review:
      "Lo que más destaco de John es su enfoque en el trabajo en equipo y su habilidad para resolver problemas complejos. Su comunicación clara permiten que todos en el proyecto se mantengan alineados, facilitando la colaboración.",
  },
  {
    id: 3,
    name: "John Calderón",
    position: "Desarrollador FullStack - CCXC",
    img: "assets/jhon_calderon.png",
    review:
      "John tiene una gran habilidad para liderar con el ejemplo. Su capacidad para comprender rápidamente las necesidades del equipo y traducirlas en soluciones prácticas fue clave en nuestro proyecto. Es una persona confiable y con un gran sentido de responsabilidad.",
  },
  {
    id: 4,
    name: "Sebastián Nieto",
    position: "Proyecto Freelance",
    img: "assets/sebastian_nieto.jpg",
    review:
      "Trabajar con John fue una experiencia enriquecedora. No solo es técnicamente competente, sino que también es muy organizado y siempre mantiene una actitud colaborativa. Su ética de trabajo y su capacidad para gestionar plazos son excepcionales.",
  },
];

export const myProjects = [
  {
    title: "Soportes TV - Instalación y Venta de Soportes",
    desc: "Un proyecto de una tienda en línea enfocada en la venta e instalación de soportes para televisores, con funcionalidades modernas y optimización de espacio.",
    subdesc:
      "Este sitio demuestra el uso de tecnologías web como HTML - CSS, Javascript y Bootstrap para crear una experiencia de usuario enfocada en productos físicos y servicios de instalación.",
    href: "https://soportestv.co/",
    texture: "/textures/project/soportestvco.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Html",
        path: "/assets/html.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "assets/javascript.svg",
      },
      {
        id: 3,
        name: "Bootstrap",
        path: "/assets/bootstrap.svg",
      },
    ],
  },
  {
    title: "Experiencias Laborales",
    desc: "A lo largo de mi carrera, he tenido la oportunidad de colaborar en diversos proyectos, trabajando en equipo para desarrollar soluciones innovadoras. Mi experiencia abarca desde el frontend con tecnologías como Vue, React, Nuxt, y TypeScript, hasta el backend con frameworks como Laravel, Yii y Java Spring. En cada proyecto, he aportado mi conocimiento y habilidades técnicas para maximizar el potencial de las herramientas utilizadas y asegurar el éxito del equipo.",
    subdesc:
      "He trabajado en proyectos colaborativos que requerían comunicación fluida y coordinación en tiempo real, aportando valor tanto en la arquitectura de software como en la implementación de características clave.",
    href: null,
    texture: "/textures/project/experiences.mp4",
    logo: "/assets/work.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 1,
        name: "Html",
        path: "/assets/html.svg",
      },
      {
        id: 2,
        name: "JavaScript",
        path: "assets/javascript.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "Hilink Travel - Exploración al aire libre",
    desc: "Una landing page de viajes utilizando tecnologías web modernas como practica y aprendizaje. Muestra mapas offline, planificación de aventuras y funciones de realidad aumentada, brindando una experiencia educativa para desarrolladores y amantes de la naturaleza.",
    subdesc:
      "Con un enfoque en el aprendizaje, Hilink Travel integra conceptos como funcionalidad offline, rutas con AR y compartir en tiempo real, utilizando React, TypeScript.",
    href: "https://hilink-travel-app.netlify.app",
    texture: "/textures/project/hilink.mp4",
    logo: "/assets/hilink.svg",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [3, -7, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [10, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-22, 10, 0],
    targetPosition: isSmall
      ? [-5, -11, -7]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "CCXC",
    pos: "Desarrollador Frontend Junior II",
    duration: "Oct 2022 - Presente",
    title:
      "Desarrollo y mantenimiento de aplicaciones web utilizando React.js, colaborando con equipos multifuncionales para garantizar la calidad del producto. Implementación de diseños responsivos y aseguramiento de la compatibilidad entre navegadores, además de participar en revisiones de código para promover la mejora continua dentro del equipo.",
    icon: "/assets/ccxc.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Intevo S.A.S",
    pos: "Desarrollador FullStack",
    duration: "Feb 2022 - Oct 2022",
    title:
      "Gestión de páginas web, ecommerce y landing pages, implementando tecnologías como TypeScript, Laravel, Vue.js, Nuxt.js, Yii2 y React. Corrección de bugs y mantenimiento, participando activamente en revisiones de código y ofreciendo retroalimentación constructiva a otros desarrolladores.",
    icon: "/assets/intevo.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Soportes TV CO",
    pos: "Desarrollador y Diseñador Web",
    duration: "Oct 2020 - Feb 2022",
    title:
      "Gestión de páginas web comerciales y procesos internos, implementando tecnologías como JavaScript, PHP, HTML5, CSS3 y Bootstrap. Optimización de contenido para mejorar el SEO en Google, estructuración de bases de datos relacionales con MySQL y diseño de contenido comercial utilizando herramientas de Adobe como Photoshop, Illustrator y After Effects.",
    icon: "/assets/tvco.png",
    animation: "salute",
  },
];
