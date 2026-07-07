export function ProjectCard({ project }) {
  const imgSrc = project.image 
    ? `${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}` 
    : null;

  return (
    <div className="pixel-border pixel-shadow bg-gray-900 hover:-translate-y-1 transition-transform overflow-hidden">
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
        <h4 className="font-press text-lg mb-4">{project.name}</h4>
        <p className="text-gray-300 text-lg leading-relaxed">{project.desc}</p>
      </div>
    </div>
  );
}
