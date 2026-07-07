// ponytail: objeto literal simples no lugar de libs complexas de i18n
export const content = {
  pt: {
    nav: { about: "Sobre", experience: "Trabalho Atual", projects: "Projetos", folio: "Pixel Folio", skills: "Skills", contact: "Contato" },
    hero: {
      role: "Game and Web Developer",
      description: "Desenvolvedor focado em gerar experiências funcionais e divertidas, apaixonado por arquitetura de MMORPG, Pixel Art e Soluções criativas.",
      ctaProjects: "Ver Projetos",
      ctaContact: "Contato"
    },
    about: {
      title: "Sobre",
      text: "Desde os 12 anos de idade desenvolvendo jogos o que acabou influenciando toda a minha vida profissional atuando sempre como desenvolvedor, designer e artista. Atualmente atuo como desenvolvedor web fullstack em horário comercial e artista e programador de games focado em MMORPG como freelancer para empresas do Brasil, Polônia, EUA e tenho como principal Hobby treinar Jiu Jitsu Brasileiro."
    },
    experience: {
      title: "Trabalho Atual",
      jobs: [
        { 
          title: "Programador Pleno - Prefeitura Municipal de Aracaju", 
          desc: "Principal projeto: INTEGRAJU. Utilizando tecnologias como Figma, Laravel, Flutter e Vue. Refatorando front-end, adicionando integrações ao back-end do sistema e criando o modo de acessibilidade para pessoas com deficiência visual.",
          link: { url: "https://integraju.aracaju.se.gov.br/", label: "Acessar INTEGRAJU" }
        },
        { title: "Freelancer Game Dev", desc: "Arquitetura de servidores MMORPG e desenvolvimento (C++, Lua)." }
      ]
    },
    projects: {
      title: "Projetos Principais",
      items: [
        { name: "Backlands", desc: "MMO adaptado para The Forgotten Server (C++) e OTClient. Perspectiva isométrica inspirada em Final Fantasy Tactics Advance. (Inicialmente feito em Rust).", image: "/capas/sertania.png", slug: "backlands" },
        { name: "PokeAI", desc: "Bot com inteligência artificial que joga Pokémon de forma autônoma. Leitura de memória em tempo real, sistema de pathfinding e integração com Twitch.", image: "/capas/pokeai.png", slug: "pokeai" },
        { name: "Retro Ninja Way", desc: "Open Tibia baseado em Naruto (OTX). Mais de 18 meses de desenvolvimento buscando se desvincular da estética clássica de Tibia. Meu primeiro projeto do tipo foi feito há 18 anos." }
      ]
    },
    folio: {
      title: "Pixel Folio",
      placeholder: "Galeria de Pixel Art (Em breve)"
    },
    skills: {
      title: "Skills",
      categories: [
        { name: "Desenvolvimento", items: "Vue, Laravel, React, Tailwind, Flutter, Responsive Design, UI/UX, PHP, JS, Figma, Docker, AWS" },
        { name: "Game Dev", items: "C++, Lua, Rust, OTClient, desenvolvimento de bots, desenvolvimento de ferramentas, Forgotten Server, OTX, Game UI/UX" },
        { name: "Principais motores de MMORPG", items: "The Forgotten Server, OTX, OTClient" },
        { name: "Arte / Design", items: "UI/UX, Pixel Art, Graffiti, Tatuagem, produção audiovisual, marketing, 15 anos de Photoshop e Illustrator, Aseprite, animação, branding, lettering" }
      ]
    },
    education: {
      title: "Formação",
      items: [
        "Tecnólogo em Desenvolvimento de Sistemas pela Universidade Tiradentes",
        "Bacharel em Design Gráfico pela Universidade Tiradentes",
        "1 ano de estudos na New Masters Academy (Academia de Artes)",
        "1 ano de estudos na Alura (Academia de Programação)",
        "Nível Técnico Integrado (3/4) em Desenvolvimento de Sistemas pelo Instituto Federal de Sergipe"
      ]
    },
    contact: {
      title: "Contato",
      email: "allanzinhodev@gmail.com",
      github: "github.com/allanzinhodev",
      linkedin: "linkedin.com/in/allanzinho",
      youtube: "youtube.com/@allanzinhodev",
      whatsapp: "wa.me/5579998745753",
      discord: "allanrd94",
      discordChannel: "discord.gg/cmffrP82jx"
    }
  },
  en: {
    nav: { about: "About", experience: "Current Work", projects: "Projects", folio: "Pixel Folio", skills: "Skills", contact: "Contact" },
    hero: {
      role: "Game and Web Developer",
      description: "Developer focused on creating functional and fun experiences, passionate about MMORPG architecture, Pixel Art, and Creative solutions.",
      ctaProjects: "View Projects",
      ctaContact: "Contact"
    },
    about: {
      title: "About",
      text: "Developing games since I was 12 years old, which ultimately influenced my entire professional life, always acting as a developer, designer, and artist. Currently, I work as a full-stack web developer during business hours, and as a game artist and programmer focused on MMORPGs as a freelancer for companies in Brazil, Poland, USA, and my main hobby is training Brazilian Jiu Jitsu."
    },
    experience: {
      title: "Current Work",
      jobs: [
        { 
          title: "Mid-Level Developer - Aracaju City Hall", 
          desc: "Main project: INTEGRAJU. Using technologies like Figma, Laravel, Flutter and Vue. Refactoring front-end, adding back-end integrations and building the accessibility mode for visually impaired users.",
          link: { url: "https://integraju.aracaju.se.gov.br/", label: "Visit INTEGRAJU" }
        },
        { title: "Game Dev Freelancer", desc: "MMORPG server architecture and development (C++, Lua)." }
      ]
    },
    projects: {
      title: "Main Projects",
      items: [
        { name: "Backlands", desc: "MMO adapted for The Forgotten Server (C++) and OTClient. Isometric perspective inspired by Final Fantasy Tactics Advance. (Initially built in Rust).", image: "/capas/sertania.png", slug: "backlands" },
        { name: "PokeAI", desc: "AI-powered bot that plays Pokémon autonomously. Real-time memory reading, pathfinding system and Twitch integration.", image: "/capas/pokeai.png", slug: "pokeai" },
        { name: "Retro Ninja Way", desc: "Naruto-based Open Tibia (OTX). 18+ months in development breaking away from classic aesthetics. My first similar project was built 18 years ago." }
      ]
    },
    folio: {
      title: "Pixel Folio",
      placeholder: "Pixel Art Gallery (Coming soon)"
    },
    skills: {
      title: "Skills",
      categories: [
        { name: "Development", items: "Vue, Laravel, React, Tailwind, Flutter, Responsive Design, UI/UX, PHP, JS, Figma, Docker, AWS" },
        { name: "Game Dev", items: "C++, Lua, Rust, OTClient, bot development, tool development, Forgotten Server, OTX, Game UI/UX" },
        { name: "Main MMORPG Engines", items: "The Forgotten Server, OTX, OTClient" },
        { name: "Art / Design", items: "UI/UX, Pixel Art, Graffiti, Tattoo, audiovisual production, marketing, 15 years of Photoshop and Illustrator, Aseprite, animation, branding, lettering" }
      ]
    },
    education: {
      title: "Education",
      items: [
        "Technologist degree in Systems Development from Universidade Tiradentes",
        "Bachelor's degree in Graphic Design from Universidade Tiradentes",
        "1 year of studies at New Masters Academy (Arts Academy)",
        "1 year of studies at Alura (Programming Academy)",
        "Integrated Technical Level (3/4) in Systems Development from Instituto Federal de Sergipe"
      ]
    },
    contact: {
      title: "Contact",
      email: "allanzinhodev@gmail.com",
      github: "github.com/allanzinhodev",
      linkedin: "linkedin.com/in/allanzinho",
      youtube: "youtube.com/@allanzinhodev",
      whatsapp: "wa.me/5579998745753",
      discord: "allanrd94",
      discordChannel: "discord.gg/cmffrP82jx"
    }
  }
};
