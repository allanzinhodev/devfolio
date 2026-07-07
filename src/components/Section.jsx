import { PixelSeparator } from './PixelSeparator';

export function Section({ id, title, children }) {
  return (
    <section id={id} className="py-16 scroll-mt-20">
      <PixelSeparator />
      <h3 className="font-press text-xl md:text-2xl mb-6 md:mb-8 flex items-center gap-4">
        <span className="w-4 h-4 flex-shrink-0 bg-neon inline-block"></span>
        {title}
      </h3>
      <div>
        {children}
      </div>
    </section>
  );
}
