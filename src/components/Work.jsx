import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce app with cart, payments, and admin dashboard. Built with React, Node.js, and PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: 'from-purple-600 to-blue-600',
    emoji: '🛒',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A real-time collaborative project management tool inspired by Trello, with drag-and-drop and live updates.',
    tags: ['Next.js', 'Socket.io', 'MongoDB'],
    color: 'from-pink-600 to-rose-600',
    emoji: '📋',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'AI Chat Interface',
    description: 'A sleek chat interface that integrates with OpenAI API, supporting markdown, code highlighting, and conversation history.',
    tags: ['React', 'TypeScript', 'OpenAI'],
    color: 'from-green-600 to-teal-600',
    emoji: '🤖',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Portfolio Builder',
    description: 'A drag-and-drop portfolio website builder with live preview and one-click deployment.',
    tags: ['Vue.js', 'Firebase', 'Tailwind'],
    color: 'from-orange-500 to-amber-500',
    emoji: '🎨',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Finance Dashboard',
    description: 'An analytics dashboard for personal finance tracking with charts, budgets, and expense categorization.',
    tags: ['React', 'D3.js', 'Express'],
    color: 'from-cyan-600 to-blue-600',
    emoji: '📊',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    title: 'Social Media API',
    description: 'A RESTful API for a social platform with authentication, posts, follows, and real-time notifications.',
    tags: ['Node.js', 'Express', 'Redis', 'JWT'],
    color: 'from-violet-600 to-purple-600',
    emoji: '📡',
    github: '#',
    live: '#',
    featured: false,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden card-hover"
    >
      {/* Thumbnail */}
      <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative`}>
        <div className="absolute inset-0 bg-black/20" />
        <span className="relative z-10">{project.emoji}</span>
        {project.featured && (
          <span className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-white/5 text-gray-400 text-xs px-3 py-1 rounded-full border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <a
            href={project.github}
            className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={15} /> Code
          </a>
          <a
            href={project.live}
            className="flex items-center gap-1.5 text-gray-500 hover:text-white text-sm transition-colors"
            aria-label="Live demo"
          >
            <FiExternalLink size={15} /> Live
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-28 px-6 relative">
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-pink-800/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-purple-500" />
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">My work</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            A collection of things I&apos;ve built — from side projects to client work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
