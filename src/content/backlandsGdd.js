// Fonte única do GDD do Backlands MMO.
// O mesmo markdown é usado para renderizar a página e gerar os downloads (.md).

export const meta = {
  title: 'Backlands MMO',
  pitch:
    'Um MMORPG oldschool de mundo aberto que transforma o folclore, as religiões e as crenças populares brasileiras em uma experiência de RPG original, construída sobre The Forgotten Server e OTClient.',
  genre: 'MMORPG 2D — perspectiva 45° (estilo Tibia)',
  platform: 'PC — cliente OTClient sobre servidor TFS',
  status: 'Documento interno de design — v0.1',
};

// Resumo "1 página" — o .md enxuto para baixar no topo da página.
export const condensedMd = `# Backlands MMO — Resumo

**MMORPG oldschool de folclore, religião e crenças populares brasileiras, sobre TFS + OTClient.**

## Em uma frase
Remodelar a base de Tibia 7.4 em uma experiência original com identidade brasileira forte, arte própria e combate legível.

## Pilares
1. Identidade brasileira legível
2. Progressão em três camadas
3. Base sólida antes de expandir

## Classes
Começa **Unranked**; ao sair do Campo de Aprendizes escolhe uma classe base:
- **Guerreiro** → evolui para **Guardião** (físico e defesa).
- **Arqueiro** → evolui para **Caçador** (dano à distância).
- **Mago** → evolui para **Arcanista** (trilhas: Curandeiro Espiritual, Elemental da Natureza, Suporte Temporal, Invocador).

## Progressão (3 camadas)
- **Level** — acesso a áreas e itens.
- **Job level (magic level)** — maturidade de classe; pode perder XP, mas nunca regride de nível.
- **Weapon proficiency** — especialização lateral pelo uso da arma.

## Direção visual
Cores mais vibrantes que Tibia, assets 100% próprios no futuro, mirando a Steam.

## MVP
3 classes • Campo de Aprendizes • combate principal • progressão clara • primeiras evoluções • spells essenciais.

---
Documento interno — Backlands MMO.
`;

// Seções do GDD. A numeração é gerada automaticamente pela ordem do array.
export const sections = [
  {
    id: 'visao-geral',
    title: 'Visão Geral',
    md: `## Visão Geral

**Pitch.** Backlands MMO é um RPG multiplayer online oldschool que parte da estrutura clássica de Tibia 7.4 e a remodela em uma experiência original enraizada na cultura brasileira — folclore, religiões e crenças populares, sertão, mata, rios, povos tradicionais e misticismo popular.

**Gênero.** MMORPG 2D com perspectiva 45° (estilo Tibia), combate em tempo real e leitura rápida.

**Plataforma.** PC. Cliente OTClient conectando a um servidor The Forgotten Server (TFS) via protocolo TCP.

**Público-alvo.** Jogadores de MMORPGs oldschool (Tibia 7.4, Medivia, Ragnarok) que procuram progressão direta, combate legível e uma ambientação inédita.

### Diferenciais
- Identidade brasileira forte como base estética **e** mecânica, não apenas skin.
- Progressão híbrida em três camadas: level, job level e proficiência de arma.
- Três classes base legíveis, com evoluções que mudam de verdade o estilo de jogo.
- Direção de arte própria e vibrante, com meta de assets 100% originais (abrindo caminho para a Steam).
- Escopo controlado e viável em TFS + OTClient.

### Referências de design
| Referência | O que aproveitamos |
| --- | --- |
| Tibia 7.4 | Vocações legíveis, progressão direta, sensação oldschool |
| Medivia | Variedade de classes e caminhos de progressão |
| Ragnarok | Job level e árvores de habilidade com pré-requisitos |
| FF Tactics Advance | Aprender habilidades pelo uso da arma (weapon proficiency) |

As referências inspiram sistemas originais — nada é copiado literalmente.`,
  },
  {
    id: 'pilares',
    title: 'Pilares do Design',
    md: `## Pilares do Design

Toda decisão de design responde a estes três pilares.

### 1. Identidade brasileira legível
O folclore, as religiões e as crenças populares são a fundação do mundo, das criaturas e das classes — sem nunca sacrificar a clareza de combate oldschool.

### 2. Progressão em três camadas
Level, job level e proficiência de arma se combinam para permitir builds reais e especialização lateral, sem grind punitivo.

### 3. Base sólida antes de expandir
Três classes, um hub inicial forte e um combate limpo vêm primeiro. Sistemas novos só entram sobre uma fundação estável.`,
  },
  {
    id: 'escopo',
    title: 'Escopo',
    md: `## Escopo

### MVP — o que valida o jogo
- 3 classes base jogáveis.
- Campo de Aprendizes (área inicial + tutorial + escolha de classe).
- Combate principal funcional.
- Progressão clara (level + job level).
- Primeiras evoluções (Guardião, Caçador, Arcanista).
- Spells essenciais por classe.

### Versão 1.0
- Árvores de habilidade por classe.
- Weapon proficiency completo.
- Duas a três regiões de mundo aberto.
- Bosses e dungeons iniciais.
- Sistema de economia básico.
- Housing — sistema já existente e funcional, aproveitado desde o início.

### Pós-lançamento
- Novas trilhas de evolução.
- Regiões e biomas adicionais.
- Eventos sazonais com folclore.
- Conteúdo endgame.

### Fora de escopo (por enquanto)
- Crafting complexo.
- Dezenas de subclasses.
- Árvores gigantes sem necessidade.
- Sistemas paralelos demais no início.`,
  },
  {
    id: 'core-loop',
    title: 'Core Loop',
    md: `## Core Loop

O ciclo minuto-a-minuto que sustenta a experiência:

- **Explorar** — descobrir biomas, regiões e segredos do mundo.
- **Combater** — enfrentar criaturas do folclore com combate legível.
- **Evoluir** — ganhar level, job level e proficiência.
- **Recompensar** — loot, spells novas, acesso a novas áreas.
- **Voltar ao hub** — reabastecer, negociar e planejar a próxima saída.`,
  },
  {
    id: 'classes',
    title: 'Classes e Evoluções',
    md: `## Classes e Evoluções

Todo personagem começa **Unranked** (sem classe) no Campo de Aprendizes. Ao sair, escolhe uma das **3 classes base** — e cada uma amadurece em uma evolução própria.

### Unranked — o ponto de partida
Sem classe definida. É a fase de aprendizado no Campo de Aprendizes: o jogador experimenta o combate antes de se comprometer com um caminho.

### Guerreiro — eixo físico e defesa
Combate corpo a corpo, alta resistência e controle de frontline. É o escudo do grupo e o guerreiro de linha de frente em solo.

**Evolução: Guardião** — aprofunda a defesa e o papel de âncora do time.

### Arqueiro — eixo de dano à distância
Combate com arco, foco em dano sustentado e posicionamento. Recompensa mira, kiting e preparação.

**Evolução: Caçador** — especialista em dano à distância e controle de campo.

### Mago — eixo mágico e de suporte
A classe mais flexível. Ao evoluir para **Arcanista**, escolhe uma trilha que redefine seu papel:

| Trilha | Papel | Fantasia |
| --- | --- | --- |
| Curandeiro Espiritual | Cura e suporte | Rezas e bênçãos populares |
| Elemental da Natureza | Dano elemental | Força da mata, dos rios e da terra |
| Suporte Temporal | Buffs, debuffs e controle | Domínio do tempo e do destino |
| Invocador | Pets e entidades | Chamar aliados do folclore |

**Regra de ouro.** Cada evolução deve mudar o estilo de jogo de verdade — não ser apenas um upgrade numérico.`,
  },
  {
    id: 'progressao',
    title: 'Sistema de Progressão',
    md: `## Sistema de Progressão

A progressão é **híbrida** e tem três camadas independentes que se somam.

### 1. Level base
Mede a progressão geral do personagem. Libera acesso a áreas, equipamentos e conteúdo.

### 2. Job level (magic level)
Equivalente ao magic level / job progression. Representa a maturidade na classe e destrava tiers da árvore de habilidades. Cada nível concede um **ponto de habilidade** para gastar em skills, passivas e especializações.

**Perda ao morrer e integridade dos pontos.** O magic level pode perder XP ao morrer e, se a perda for suficiente, cair de nível. Para os pontos nunca ficarem dessincronizados dos níveis:
- O sistema guarda em uma variável o **último ponto adicionado** (uma pilha dos pontos ganhos por nível).
- Ao perder um nível, o **ponto correspondente daquele nível é removido** junto.
- Se não houver **ponto livre** (todos já gastos na árvore), o sistema estorna o **último ponto alocado**, retirando-o da habilidade onde ele estava.

Assim, o jogador nunca mantém um ponto que veio de um nível perdido.

### 3. Weapon proficiency
Algumas armas acumulam proficiência pelo uso contínuo. Serve para aprender habilidades de arma ou ganhar passivas que melhoram habilidades existentes.

**Princípios da proficiência de arma:**
- Não substitui level nem job level.
- Não trava a classe principal.
- Incentiva usar temporariamente certas armas para ficar mais completo.
- É progressão **lateral**, nunca punição.`,
  },
  {
    id: 'spells',
    title: 'Spells e Skills',
    md: `## Spells e Skills

Toda habilidade pertence a uma destas categorias:

- **Skill de classe** — aprendida por job level ou árvore.
- **Skill de arma** — aprendida por uso contínuo e proficiência.
- **Skill híbrida** — exige classe + arma específica.
- **Passiva** — melhora uma categoria de habilidade, arma ou função tática.

### Ficha padrão de habilidade
Toda skill nova é documentada com: nome, fantasia, tipo, como desbloqueia, requisitos, efeito, papel tático, sinergias, limitações e impacto no balanceamento.`,
  },
  {
    id: 'mundo',
    title: 'Mundo e Ambientação',
    md: `## Mundo e Ambientação

**Tema.** O sertão e o Brasil profundo como cenário de fantasia: a seca e a mata, o rio e a caatinga, a fé popular e o encantado.

### Biomas
- **Sertão / Caatinga** — terra rachada, sol forte, sobrevivência.
- **Mata / Floresta** — vida densa, perigo escondido, encantados.
- **Rios e Igarapés** — travessias, criaturas das águas, mistério.
- **Vilarejos e Feiras** — hubs de cultura, comércio e quests.

### Criaturas (inspiração folclórica)
Entidades do folclore reimaginadas como criaturas e bosses originais — guardiões da mata, assombrações do sertão, encantados dos rios. A inspiração é o folclore; o design é original e respeitoso.

### Facções e povos
Povos tradicionais, comunidades ribeirinhas e ordens místicas dão contexto às quests e à lore, sem exigir sistemas pesados no início.`,
  },
  {
    id: 'direcao-visual',
    title: 'Direção Visual',
    md: `## Direção Visual

**Princípio.** Partir da leitura clássica de Tibia, mas com uma paleta mais vibrante e identidade própria. O estilo original é ponto de partida, não amarra.

### Metas
- **Cores vibrantes** — mais saturação e vida que o visual padrão de Tibia, refletindo o folclore, as festas populares e a luz do Brasil.
- **Assets 100% próprios** — no futuro, todo sprite, tile e efeito deve ser original, sem depender de arte de terceiros.
- **Caminho para a Steam** — arte e identidade próprias abrem a possibilidade de estender o jogo para a Steam como produto autoral.

### Ambientação visual
Religiões e crenças populares brasileiras informam símbolos, cores e atmosfera — dos altares e ex-votos às festas e procissões — sempre com originalidade e respeito.`,
  },
  {
    id: 'campo-de-aprendizes',
    title: 'Campo de Aprendizes',
    md: `## Campo de Aprendizes

Reinterpretação do antigo Rookgaard: a área inicial onde todo jogador começa, ainda **Unranked**.

- **Tutorial** — movimento, combate e interface em poucos passos.
- **Primeiras quests** — pequenas missões que ensinam o core loop.
- **Escolha de classe** — o jogador experimenta e decide entre Guerreiro, Arqueiro e Mago.
- **Condição de saída** — ao atingir um marco de level/job, parte para o mundo principal.

**Objetivo.** Ensinar o jogo sem texto demais e entregar a primeira sensação de progressão rápido.`,
  },
  {
    id: 'roadmap',
    title: 'Roadmap',
    md: `## Roadmap

| Fase | Foco |
| --- | --- |
| Pré-produção | Documento, protótipos de sistema, definição de arte |
| Vertical slice | Uma classe + Campo de Aprendizes jogável ponta a ponta |
| Alpha | 3 classes, progressão base, primeira região |
| Beta | Árvores, proficiência, bosses, testes de balanceamento |
| Release | Mundo 1.0, economia, endgame inicial |`,
  },
  {
    id: 'riscos',
    title: 'Riscos',
    md: `## Riscos

- **Escopo grande demais** — mitigar priorizando o MVP e marcando ideias legais como pós-lançamento.
- **Sistemas cedo demais** — não empilhar sistemas antes da base estar sólida.
- **Dependências técnicas** — TFS e OTClient têm limites; validar viabilidade antes de prometer.
- **Balanceamento** — três camadas de progressão exigem testes constantes para não quebrar o combate.`,
  },
  {
    id: 'decisoes',
    title: 'Decisões em Aberto',
    md: `## Decisões em Aberto

- Nomeação final das trilhas e criaturas (buscar originalidade respeitosa ao folclore).
- Curva exata de job level e de proficiência de arma.
- Quantidade de regiões no lançamento.
- Modelo de economia e de drop.
- Escopo do PvP (entra no 1.0 ou depois?).

### Outfits tradicionais x outfits por classe
Dois modelos possíveis para o visual do personagem:

- **Outfits tradicionais** — no estilo Tibia clássico, sem customização fina.
- **Outfits por classe** — permitem trocar cabelo, cor de pele e 2 cores base da roupa, no estilo Ragnarok.

**Vantagem do modelo por classe.** Além da customização, ele facilita muito a criação de animações no futuro — o principal argumento a favor. A decidir se compensa abrir mão dos outfits tradicionais livres por esse ganho de produção.

> Esta seção é viva: cada decisão fechada sai daqui e vira regra no documento.`,
  },
];

// Monta o GDD completo (cabeçalho + todas as seções) para o download único.
export function buildFullMd() {
  const header = `# ${meta.title}

> ${meta.pitch}

- **Gênero:** ${meta.genre}
- **Plataforma:** ${meta.platform}
- **Status:** ${meta.status}

---
`;
  return header + sections.map((s) => s.md).join('\n\n---\n\n') + '\n';
}
