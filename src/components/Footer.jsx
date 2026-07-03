import { useState } from 'react';

export function Footer({ t }) {
  const [copied, setCopied] = useState(false);
  return (
    <footer id="contact" className="py-12 border-t-2 border-neon mt-24 text-center">
      <h3 className="font-press text-2xl mb-8 flex items-center justify-center gap-4">
        <span className="w-4 h-4 bg-neon inline-block"></span>
        {t.contact.title}
      </h3>
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-8 text-xl font-press text-sm flex-wrap px-4">
        <a href={`mailto:${t.contact.email}`} className="hover:text-neon">Email</a>
        <a href={`https://${t.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-neon">LinkedIn</a>
        <a href={`https://${t.contact.github}`} target="_blank" rel="noreferrer" className="hover:text-neon">GitHub</a>
        <a href={`https://${t.contact.youtube}`} target="_blank" rel="noreferrer" className="hover:text-neon">YouTube</a>
        <a href={`https://${t.contact.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-neon">WhatsApp</a>
        <div className="relative inline-block">
          <button 
            onClick={() => {
              navigator.clipboard.writeText(t.contact.discord);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }} 
            className="hover:text-neon transition-colors"
          >
            Discord
          </button>
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-neon text-xs px-2 py-1 rounded whitespace-nowrap pixel-border pointer-events-none">
              Copiado!
            </span>
          )}
        </div>
        <a href={`https://${t.contact.discordChannel}`} target="_blank" rel="noreferrer" className="hover:text-neon">Discord Channel</a>
      </div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Allan Rodrigues</p>
    </footer>
  );
}
