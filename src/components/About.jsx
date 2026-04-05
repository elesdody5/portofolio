import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Completed' },
  { value: '15+', label: 'Happy Clients' },
  { value: '5+', label: 'Open Source Contributions' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Section bg accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-800/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-purple-500" />
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">About me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Passionate about building{' '}
              <span className="text-gradient">great software</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-5">
              I&apos;m a full-stack developer with a passion for creating elegant, performant web
              applications. I love turning complex problems into simple, beautiful, and intuitive
              digital experiences.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
              to open-source projects, or enjoying a good cup of coffee while sketching UI concepts.
            </p>

            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'Tailwind'].map((tech) => (
                <span
                  key={tech}
                  className="bg-white/5 border border-white/10 text-gray-300 text-sm px-4 py-1.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Avatar + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            {/* Avatar placeholder */}
            <div className="relative mx-auto lg:mx-0 w-56 h-56">
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-7xl font-bold text-white glow">
                E
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-3xl border border-purple-500/30 -z-10" />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
                >
                  <div className="text-3xl font-extrabold text-gradient mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
