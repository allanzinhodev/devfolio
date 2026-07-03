export function Hero({ t }) {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center items-start pt-12 pb-24">
      <h1 className="font-press text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight">
        ALLAN<br/>RODRIGUES
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-400 mb-6 font-press">
        {`> ${t.hero.role}`}
      </h2>
      <p className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        {t.hero.description}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
        <a href="#projects" className="pixel-border px-6 py-4 sm:py-3 font-press bg-neon text-black hover:bg-pink-600 pixel-shadow-hover transition-transform inline-block text-center text-sm sm:text-base">
          {t.hero.ctaProjects}
        </a>
        <a href="#contact" className="pixel-border px-6 py-4 sm:py-3 font-press hover:bg-neon hover:text-black pixel-shadow-hover transition-transform inline-block text-center text-sm sm:text-base">
          {t.hero.ctaContact}
        </a>
      </div>
    </section>
  );
}
