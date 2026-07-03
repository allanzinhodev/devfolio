export function ProjectCard({ project }) {
  return (
    <div className="pixel-border p-6 pixel-shadow bg-gray-900 hover:-translate-y-1 transition-transform">
      <h4 className="font-press text-lg mb-4">{project.name}</h4>
      <p className="text-gray-300 text-lg leading-relaxed">{project.desc}</p>
    </div>
  );
}
