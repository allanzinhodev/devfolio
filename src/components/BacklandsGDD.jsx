// Página privada do GDD do Backlands MMO (rota /backlands).
// Não é linkada em nenhuma página do portfólio — é um link solto para enviar ao sócio.
import { useState } from 'react';
import { meta, condensedMd, sections, buildFullMd } from '../content/backlandsGdd';
import { MarkdownLite } from './MarkdownLite';
import { PixelSeparator } from './PixelSeparator';
import { downloadMd } from '../utils/download';

function DownloadButton({ onClick, children, primary }) {
  const base =
    'pixel-border px-4 py-3 font-press text-[10px] sm:text-xs transition-colors inline-flex items-center gap-2';
  const style = primary
    ? 'bg-neon text-black hover:bg-white'
    : 'bg-gray-900 text-white hover:bg-neon hover:text-black';
  return (
    <button onClick={onClick} className={`${base} ${style}`}>
      {children}
    </button>
  );
}

export function BacklandsGDD() {
  const [copied, setCopied] = useState(false);
  const bannerSrc = `${import.meta.env.BASE_URL}capas/sertania.png`;

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Barra superior mínima (sem navegação para o portfólio) */}
      <header className="sticky top-0 z-40 bg-black/90 border-b-2 border-white backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="font-press text-sm sm:text-lg text-neon">BACKLANDS</div>
          <span className="font-press text-[9px] sm:text-[10px] text-gray-500 border-2 border-gray-700 px-2 py-1">
            DOC INTERNO
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
            <p className="font-press text-[10px] text-neon mb-4">GAME DESIGN DOCUMENT</p>
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

        {/* DOWNLOADS PRINCIPAIS */}
        <div className="pixel-border bg-gray-900/60 p-5 sm:p-6 mb-4">
          <h2 className="font-press text-sm text-white mb-1">Baixar o documento</h2>
          <p className="text-gray-400 text-lg mb-5">
            Comece pelo resumo de uma página. Precisa de mais detalhe? Baixe o GDD completo ou
            apenas a seção que interessa (botão em cada seção abaixo).
          </p>
          <div className="flex flex-wrap gap-3">
            <DownloadButton
              primary
              onClick={() => downloadMd(condensedMd, 'backlands-gdd-resumo.md')}
            >
              ⬇ RESUMO (1 PÁGINA) .MD
            </DownloadButton>
            <DownloadButton onClick={() => downloadMd(buildFullMd(), 'backlands-gdd-completo.md')}>
              ⬇ GDD COMPLETO .MD
            </DownloadButton>
            <div className="relative">
              <DownloadButton onClick={copyLink}>🔗 COPIAR LINK</DownloadButton>
              {copied && (
                <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-gray-800 text-neon text-xs px-2 py-1 pixel-border whitespace-nowrap">
                  Copiado!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ÍNDICE */}
        <nav className="pixel-border bg-black p-5 sm:p-6 mb-10">
          <h2 className="font-press text-[10px] text-neon mb-4">ÍNDICE</h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-gray-300 hover:text-neon transition-colors text-lg flex items-baseline gap-3"
                >
                  <span className="font-press text-[10px] text-gray-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* SEÇÕES */}
        {sections.map((s, i) => (
          <section key={s.id} id={s.id} className="scroll-mt-24 mb-4">
            <div className="flex items-start justify-between gap-4 mb-2">
              <span className="font-press text-[10px] text-neon pt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <button
                onClick={() => downloadMd(s.md + '\n', `backlands-${s.id}.md`)}
                className="pixel-border px-3 py-2 font-press text-[9px] bg-gray-900 hover:bg-neon hover:text-black transition-colors whitespace-nowrap flex-shrink-0"
                title={`Baixar a seção "${s.title}" em .md`}
              >
                ⬇ .MD
              </button>
            </div>
            <MarkdownLite md={s.md} />
            <PixelSeparator />
          </section>
        ))}

        {/* RODAPÉ */}
        <footer className="mt-16 pt-8 border-t-2 border-neon text-center">
          <p className="text-gray-500 text-sm">
            Backlands MMO — documento interno de design. {new Date().getFullYear()}.
          </p>
        </footer>
      </main>
    </div>
  );
}
