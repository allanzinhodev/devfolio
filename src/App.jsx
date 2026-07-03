import { useState } from 'react';
import { content } from './content/dictionary';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { ProjectCard } from './components/ProjectCard';
import { PixelGrid } from './components/PixelGrid';
import { Footer } from './components/Footer';
import { CursorCharacter } from './components/CursorCharacter';

function App() {
  const [lang, setLang] = useState('pt');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-black">
      <CursorCharacter />
      
      <div className="relative z-10">
        <Header lang={lang} setLang={setLang} t={t} />
        
        <main className="max-w-4xl mx-auto px-4">
        <Hero t={t} />

        <Section id="about" title={t.about.title}>
          <p className="text-xl leading-relaxed text-gray-300">
            {t.about.text}
          </p>
        </Section>

        <Section id="experience" title={t.experience.title}>
          <div className="space-y-8">
            {t.experience.jobs.map((job, idx) => (
              <div key={idx} className="border-l-4 border-neon pl-4 py-1">
                <h4 className="font-bold text-xl mb-2 font-press text-sm leading-6">{job.title}</h4>
                <p className="text-gray-400 text-lg">{job.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title={t.projects.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.projects.items.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </Section>

        <Section id="folio" title={t.folio.title}>
          <PixelGrid placeholder={t.folio.placeholder} />
        </Section>

        <Section id="skills" title={t.skills.title}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.skills.categories.map((cat, idx) => (
              <div key={idx}>
                <h4 className="font-press text-sm text-neon mb-3">{cat.name}</h4>
                <p className="text-xl">{cat.items}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title={t.education.title}>
          <ul className="list-disc list-inside text-xl space-y-2 text-gray-300">
            {t.education.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Section>
      </main>

        <Footer t={t} />
      </div>
    </div>
  );
}

export default App;
