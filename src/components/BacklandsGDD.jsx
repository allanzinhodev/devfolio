import { useState } from 'react';
import { meta } from '../content/backlandsGdd';
import { todoSections } from '../content/todoData';
import { PixelSeparator } from './PixelSeparator';
import { TechStackDiagram } from './TechStackDiagram';

function TodoCarouselCard({ section }) {
  const [slide, setSlide] = useState(0); // 0 = Conceito, 1 = Progresso
  const imageSrc = `${import.meta.env.BASE_URL}capas/${section.image}`;

  return (
    <div className="pixel-border bg-gray-900/60 p-5 sm:p-6 mb-8 hover:border-neon transition-colors group">
      {/* CARD HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-gray-800 pb-4 mb-5">
        <h3 className="font-press text-base sm:text-lg text-white flex items-center gap-2">
          <span className="w-3 h-3 bg-neon inline-block"></span>
          {section.title}
        </h3>
        
        {/* CAROUSEL SWITCH BUTTONS */}
        <div className="flex gap-2">
          <button
            onClick={() => setSlide(0)}
            className={`pixel-border px-3 py-2 font-press text-[9px] sm:text-[10px] transition-colors ${
              slide === 0
                ? 'bg-neon text-black shadow-[2px_2px_0px_rgba(255,255,255,1)]'
                : 'bg-black text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            💡 CONCEITO
          </button>
          <button
            onClick={() => setSlide(1)}
            className={`pixel-border px-3 py-2 font-press text-[9px] sm:text-[10px] transition-colors ${
              slide === 1
                ? 'bg-neon text-black shadow-[2px_2px_0px_rgba(255,255,255,1)]'
                : 'bg-black text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            📈 PROGRESSO
          </button>
        </div>
      </div>

      {/* CAROUSEL BODY: HALF AND HALF LAYOUT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[300px]">
        {/* IMAGE SIDE */}
        <div className="pixel-border border-gray-800 bg-black/40 overflow-hidden relative flex items-center justify-center p-3 h-64 md:h-auto select-none">
          <img
            src={imageSrc}
            alt={`${section.title} illustration`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            style={{ imageRendering: 'pixelated' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          <span className="absolute bottom-2 right-2 bg-black/85 pixel-border border-gray-800 px-2 py-1 font-press text-[8px] text-gray-500 uppercase tracking-widest">
            {slide === 0 ? 'Conceito Visual' : 'Mockup / Dev'}
          </span>
        </div>

        {/* TEXT / DATA SIDE */}
        <div className="flex flex-col justify-between">
          <div>
            {slide === 0 ? (
              // CONCEITO VIEW
              <div className="space-y-4">
                <span className="font-press text-[9px] text-neon uppercase block tracking-wider">
                  Planejado & Design
                </span>
                <div className="text-gray-300 text-sm leading-relaxed space-y-3">
                  {section.conceptText.map((p, idx) => (
                    <p key={idx}>
                      {p.split(/(\*\*.*?\*\*)/).map((part, pIdx) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={pIdx} className="text-neon font-bold">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        return part;
                      })}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              // PROGRESSO VIEW
              <div className="space-y-4">
                <span className="font-press text-[9px] text-neon uppercase block tracking-wider">
                  Desenvolvimento Atual
                </span>
                
                {/* HEALTH/EXP PROGRESS BAR */}
                <div>
                  <div className="flex justify-between font-press text-[9px] text-gray-400 mb-1">
                    <span>PROGRESSO GERAL</span>
                    <span className="text-neon">{section.progressPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-950 pixel-border border-gray-800 p-0.5 h-6 flex items-stretch">
                    <div
                      className="bg-neon transition-all duration-700 ease-out"
                      style={{ width: `${section.progressPercentage}%` }}
                    />
                  </div>
                </div>

                {/* TASKS CHECKLIST */}
                <div className="space-y-2 mt-4">
                  <span className="font-press text-[9px] text-gray-500 block mb-2">Checklist de Tarefas:</span>
                  <ul className="space-y-2 text-xs">
                    {section.progressTasks.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        {t.done ? (
                          <>
                            <span className="font-press text-neon text-[10px] select-none">[x]</span>
                            <span className="text-gray-500 line-through leading-tight">
                              {t.label}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="font-press text-gray-600 text-[10px] select-none">[ ]</span>
                            <span className="text-gray-300 leading-tight">
                              {t.label}
                            </span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* CARD FOOTER INFO */}
          <div className="border-t border-gray-800 pt-4 mt-6 flex justify-between items-center text-[9px] font-press text-gray-500">
            <span>BACKLANDS RPG</span>
            <span className="text-neon/75">
              SLIDE {slide + 1}/2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function JogoLandingPage() {
    return (
        <div className="space-y-12 text-gray-300 animate-fade-in">
            <section className="pixel-border bg-gray-900/60 p-6 sm:p-10">
                <h2 className="font-press text-xl text-neon mb-6">O que é o Backlands?</h2>
                <div className="text-lg leading-relaxed space-y-4">
                    <p>
                        Backlands é um <strong>servidor custom de Tibia moderno</strong>, construído sobre The Forgotten Server e OTClient, porém com um conceito fundamental:
                        um <strong>downgrade para o conteúdo pré-7.7</strong>.
                    </p>
                    <p>
                        O Tibia moderno possui uma quantidade massiva de sistemas, itens e informações que muitas vezes sobrecarregam o jogador. 
                        Ao retornarmos para uma base pré-7.7, nós <strong>diminuímos a quantidade de informação</strong> e focamos no que importa: 
                        um combate mais legível, uma progressão clara e uma experiência oldschool verdadeira.
                    </p>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="pixel-border bg-gray-900/40 p-6 hover:border-neon transition-colors">
                    <h3 className="font-press text-sm text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-neon inline-block"></span>
                        Folclore Brasileiro
                    </h3>
                    <p className="leading-relaxed">
                        A ambientação abandona a fantasia medieval europeia padrão. O jogo é profundamente enraizado 
                        no folclore, religiões e crenças populares brasileiras. Enfrente criaturas do sertão, explore a caatinga e a mata, e conheça lendas vivas.
                    </p>
                </div>

                <div className="pixel-border bg-gray-900/40 p-6 hover:border-neon transition-colors">
                    <h3 className="font-press text-sm text-white mb-4 flex items-center gap-2">
                        <span className="w-2 h-2 bg-neon inline-block"></span>
                        Progressão Direta
                    </h3>
                    <p className="leading-relaxed">
                        Três camadas independentes: Level (acesso ao mundo), Job Level (desbloqueio de skills da classe) e Proficiência de Arma (bônus pelo uso).
                        Comece Unranked e evolua para Guerreiro, Arqueiro ou Mago, com evoluções reais sem árvores confusas.
                    </p>
                </div>
            </section>
            
            <PixelSeparator />

            <section className="space-y-8 pixel-border bg-black p-6 sm:p-10">
                <h2 className="font-press text-xl text-neon text-center mb-8">Nossa Base Tecnológica</h2>
                <div className="my-8">
                  <TechStackDiagram />
                </div>

                <div className="overflow-x-auto mt-8">
                  <table className="w-full border-collapse border-2 border-white text-sm">
                    <thead className="bg-neon text-black font-press">
                      <tr>
                        <th className="border-2 border-white px-4 py-3 text-left">Camada</th>
                        <th className="border-2 border-white px-4 py-3 text-left">Tecnologia</th>
                        <th className="border-2 border-white px-4 py-3 text-left">Papel</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-900 text-gray-300">
                      {[
                        ["Engine do Jogo", "TFS 1.8 Downgrade (C++23 + Lua 5.5)", "Lógica principal"],
                        ["Banco de Dados", "MariaDB", "Persistência de dados"],
                        ["Cliente do Jogo", "AstraClient (C++ + Lua)", "Interface do jogador"],
                        ["Edição de Mapa", "NexaMap Editor (C++20)", "Design do mundo"],
                        ["Criação de Assets", "Object Builder", "Referência e assets"],
                        ["Ferramentas & Site", "React + Vite + Tailwind", "Frontend e Workspace"],
                      ].map(([layer, tech, role]) => (
                        <tr key={layer} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                          <td className="border-2 border-gray-700 px-4 py-3">{layer}</td>
                          <td className="border-2 border-gray-700 px-4 py-3 text-neon font-bold">{tech}</td>
                          <td className="border-2 border-gray-700 px-4 py-3">{role}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
            </section>
        </div>
    );
}

export function BacklandsGDD() {
  const [activeTab, setActiveTab] = useState('jogo'); // 'jogo' ou 'desenvolvimento'
  const bannerSrc = `${import.meta.env.BASE_URL}capas/sertania.png`;

  return (
    <div className="min-h-screen bg-black">
      {/* Barra superior mínima */}
      <header className="sticky top-0 z-40 bg-black/90 border-b-2 border-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="font-press text-sm sm:text-lg text-neon">BACKLANDS</div>
          <span className="font-press text-[9px] sm:text-[10px] text-gray-500 border-2 border-gray-700 px-2 py-1">
            PORTAL DO PROJETO
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 animate-fade-in">
        {/* BANNER */}
        <div className="relative w-full mb-10">
          <div className="absolute inset-3 border-4 border-white bg-neon/20 z-0" aria-hidden="true"></div>
          <div className="relative z-10 pixel-border overflow-hidden bg-gray-900">
            <img
              src={bannerSrc}
              alt="Backlands — Sertania Online"
              className="w-full h-auto object-cover"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </div>

        {/* HERO */}
        <div className="relative mb-10">
          <div className="absolute -inset-1 border-4 border-neon/30 z-0" aria-hidden="true"></div>
          <div className="relative z-10 pixel-border bg-gray-900/70 p-6 sm:p-10">
            <p className="font-press text-[10px] text-neon mb-4">SOBRE O PROJETO</p>
            <h1 className="font-press text-3xl sm:text-5xl text-white leading-tight mb-5">
              {meta.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-6">{meta.pitch}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="border-l-4 border-neon pl-3">
                <span className="font-press text-[9px] text-gray-500 block mb-1">GÊNERO</span>
                <span className="text-gray-300">{meta.genre}</span>
              </div>
              <div className="border-l-4 border-neon pl-3">
                <span className="font-press text-[9px] text-gray-500 block mb-1">PLATAFORMA</span>
                <span className="text-gray-300">{meta.platform}</span>
              </div>
              <div className="border-l-4 border-neon pl-3">
                <span className="font-press text-[9px] text-gray-500 block mb-1">STATUS</span>
                <span className="text-gray-300">{meta.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* SELETOR DE ABAS */}
        <div className="flex gap-3 mb-10 border-b-2 border-gray-800 pb-3">
          <button
            onClick={() => setActiveTab('jogo')}
            className={`pixel-border px-4 py-3 font-press text-[10px] sm:text-xs transition-colors ${
              activeTab === 'jogo'
                ? 'bg-neon text-black border-neon font-bold'
                : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            ⚔️ O JOGO
          </button>
          <button
            onClick={() => setActiveTab('desenvolvimento')}
            className={`pixel-border px-4 py-3 font-press text-[10px] sm:text-xs transition-colors ${
              activeTab === 'desenvolvimento'
                ? 'bg-neon text-black border-neon font-bold'
                : 'bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            🛠️ DESENVOLVIMENTO
          </button>
        </div>

        {/* CONTEÚDO CONDICIONAL POR ABA */}
        {activeTab === 'jogo' ? (
            <JogoLandingPage />
        ) : (
          <div className="animate-fade-in">
            {todoSections.map((section) => (
              <TodoCarouselCard key={section.id} section={section} />
            ))}
          </div>
        )}

        {/* RODAPÉ */}
        <footer className="mt-16 pt-8 border-t-2 border-neon text-center">
          <p className="text-gray-500 text-sm">
            Backlands MMO — {new Date().getFullYear()}.
          </p>
        </footer>
      </main>
    </div>
  );
}
