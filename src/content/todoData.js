// Conteúdo da aba TODO do Backlands GDD.
export const todoSections = [
  {
    id: 'todo-classes',
    title: 'Classes',
    image: 'todo_classes.png',
    conceptText: [
      'Todo personagem inicia como **Aprendiz (Classe 0)** na ilha tutorial de Asha, permitindo que os jogadores experimentem o combate básico antes de se comprometerem com uma vocação.',
      'Ao concluir o treinamento, o jogador poderá escolher sua classe base de Tier 1:',
      '**0 Aprendiz:** A fase inicial comum de testes e aprendizado.',
      '**1.1 Guerreiro:** Eixo físico com foco em defesa, controle de frontline e alta resistência.',
      '**1.2 Mago:** Eixo mágico voltado para flexibilidade elemental, rezas de cura espiritual e suporte temporal.',
      '**1.3 Rastreador:** Eixo de ataque à distância e agilidade, focado em movimentação (kiting), armadilhas e dano sustentado.'
    ],
    progressPercentage: 45,
    progressTasks: [
      { label: 'Definição das 4 classes iniciais e árvore de evolução', done: true },
      { label: 'Estruturação da classe Aprendiz (Nível 0)', done: true },
      { label: 'Balanceamento de fórmulas de dano físico e mágico', done: false },
      { label: 'Implementação de spells de Tier 1 no TFS (C++/Lua)', done: false }
    ]
  },
  {
    id: 'todo-mapa',
    title: 'Mapa',
    image: 'todo_map.png',
    conceptText: [
      '**0 Rookgaard - Asha:** "Asha" significa "Esperança" ou "Vida nova" em sânscrito. Será nossa versão adaptada do Campo de Aprendizes de Ragnarok, mas mantendo a sensação profunda de exploração e perigo de um RPG clássico, evitando deixar o tutorial mecanizado ou linear demais. Nesse aspecto, o Tibia clássico é superior e serve de inspiração.',
      '**Comunidade Rookstayer:** Planejamos criar casas para aluguel já em Asha, incentivando jogadores que queiram permanecer na ilha inicial e construir uma comunidade de "Rookstayers" com conteúdos dedicados pós-lançamento.',
      '**Exploração e Relíquias:** No pré-main, o jogador poderá encontrar ou ganhar **3 relíquias** que concedem habilidades iniciais de cada classe Tier 1 (Guerreiro, Mago, Rastreador). Isso permite que eles testem minimamente a jogabilidade de cada classe antes da escolha definitiva e os incentiva a explorar os cantos mais misteriosos de Asha.'
    ],
    progressPercentage: 60,
    progressTasks: [
      { label: 'Planejamento conceitual do vilarejo de Asha', done: true },
      { label: 'Mecânica do script de Relíquias Iniciais para teste de classes', done: true },
      { label: 'Modelagem do sistema de casas de aluguel de Rookstayers', done: false },
      { label: 'Design detalhado das áreas de caça no editor RME', done: false }
    ]
  },
  {
    id: 'todo-monstros',
    title: 'Monstros',
    image: 'todo_monsters.png',
    conceptText: [
      'Criação de criaturas e assombrações enraizadas no folclore, religiões e crenças populares brasileiras.',
      'Os monstros terão padrões de comportamento (IA) que exigirão táticas específicas de posicionamento e trabalho em equipe.',
      'Bosses de mundo e criaturas "encantadas" que guardam locais secretos da mata e do sertão.'
    ],
    progressPercentage: 20,
    progressTasks: [
      { label: 'Pesquisa histórica e folclórica das criaturas', done: true },
      { label: 'Criação dos sprites pixel art isométricos', done: false },
      { label: 'Programação de comportamentos especiais em Lua/XML', done: false }
    ]
  },
  {
    id: 'todo-sistemas',
    title: 'Sistemas',
    image: 'todo_systems.png',
    conceptText: [
      '**Progressão Híbrida em 3 Camadas:** Integração do Level base, Job Level (magic level) e Weapon Proficiency (proficiência de arma).',
      '**Mecânica de Morte Justa:** O magic level pode perder experiência ao morrer e regredir de nível. Quando isso ocorre, o último ponto alocado na árvore de habilidades é automaticamente estornado para que o jogador nunca fique com pontos inconsistentes.',
      '**Relíquias Equipáveis:** Equipamentos sagrados e amuletos místicos que alteram propriedades de skills e dão bônus passivos únicos.'
    ],
    progressPercentage: 35,
    progressTasks: [
      { label: 'Cálculo e lógica matemática de penalidade por morte', done: true },
      { label: 'Design da UI da Árvore de Talentos no OTClient', done: false },
      { label: 'Sistema de persistência de proficiência de armas em SQL', done: false }
    ]
  },
  {
    id: 'todo-alteracoes',
    title: 'Alterações Importantes',
    image: 'todo_changes.png',
    conceptText: [
      'Modificações críticas no código-fonte C++ do TFS para adaptar colisões e renderização ao estilo de perspectiva isométrica (45°).',
      'Otimizações severas na comunicação cliente-servidor para evitar atrasos na movimentação diagonal do OTClient.',
      'Polimento geral nas interfaces de usuário, simplificando janelas e destacando feedbacks de combate.'
    ],
    progressPercentage: 50,
    progressTasks: [
      { label: 'Refatoração da movimentação diagonal no OTClient', done: true },
      { label: 'Ajuste de detecção de colisão 45° no TFS', done: false },
      { label: 'Desenvolvimento do sistema de prevenção de exploits de rede', done: false }
    ]
  },
  {
    id: 'todo-art',
    title: 'Game Art Reference',
    image: 'game_art_ref_1.png',
    conceptText: [
      'Esta imagem é a referência artística primária que define a paleta de cores e o estilo visual do mapa adaptado para a perspectiva isométrica de 45°.',
      'O objetivo é mesclar a saturação e cores vibrantes que refletem a luz do sertão e da vegetação brasileira com o visual clean e nostálgico dos RPGs clássicos 2D.',
      'Garante que todos os novos tilesets e sprites mantenham a consistência estética do projeto principal.'
    ],
    progressPercentage: 75,
    progressTasks: [
      { label: 'Geração e validação da imagem de referência de estilo', done: true },
      { label: 'Definição da paleta de cores hexadecimais padrão', done: true },
      { label: 'Desenho dos tilesets de caatinga e vilas em 45°', done: false }
    ]
  }
];
