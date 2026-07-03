import { useState } from 'react';

// ponytail: componente simples, recebe lang, setLang e t (traduções)
export function Header({ lang, setLang, t }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleLang = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  // Links isolados para reutilizar no desktop e no mobile
  const NavLinks = () => (
    <>
      <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-neon transition-colors block py-2 md:py-0">{t.nav.about}</a>
      <a href="#experience" onClick={() => setIsOpen(false)} className="hover:text-neon transition-colors block py-2 md:py-0">{t.nav.experience}</a>
      <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-neon transition-colors block py-2 md:py-0">{t.nav.projects}</a>
      <a href="#folio" onClick={() => setIsOpen(false)} className="hover:text-neon transition-colors block py-2 md:py-0">{t.nav.folio}</a>
      <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-neon transition-colors block py-2 md:py-0">{t.nav.contact}</a>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-black/90 border-b-2 border-white mb-8 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-press text-xl">AR.</div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-press text-xs items-center">
          <NavLinks />
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="pixel-border px-3 py-1 font-press text-xs hover:bg-neon hover:text-black transition-colors"
          >
            {lang.toUpperCase()}
          </button>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden font-press text-xs hover:text-neon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '[X]' : '[MENU]'}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <nav className="md:hidden bg-black border-t-2 border-b-2 border-neon p-4 font-press text-xs text-center flex flex-col gap-4">
          <NavLinks />
        </nav>
      )}
    </header>
  );
}
