export function ProjectCard({ project }) {
  const imgSrc = project.image 
    ? `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}` 
    : null;

  const Card = (
    <div className={`pixel-border pixel-shadow bg-gray-900 hover:-translate-y-1 transition-transform overflow-hidden ${project.slug ? 'cursor-pointer' : ''}`}>
      {imgSrc && (
        <div className="w-full h-40 overflow-hidden">
          <img 
            src={imgSrc} 
            alt={project.name} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <h4 className="font-press text-lg mb-4 flex items-center gap-2">
          {project.name}
          {project.slug && <span className="text-neon text-xs">▸</span>}
        </h4>
        <p className="text-gray-300 text-lg leading-relaxed">{project.desc}</p>
      </div>
    </div>
  );

  if (project.slug) {
    return (
      <a href={`#project-${project.slug}`} onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('open-project', { detail: project.slug }));
      }}>
        {Card}
      </a>
    );
  }

  return Card;
}
