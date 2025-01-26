import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

export default function ProjectCard({
  title,
  description,
  githubLink,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex space-x-4">
        <Link
          href={githubLink}
          className="text-blue-400 hover:text-blue-600"
        >
          GitHub
        </Link>
        <Link
          href={demoLink}
          className="text-blue-400 hover:text-blue-600"
        >
          Live Demo
        </Link>
      </div>
    </div>
  );
}