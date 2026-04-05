import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
    ],
  },
  {
    category: 'Tools & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 78 },
      { name: 'AWS / Vercel', level: 75 },
      { name: 'Figma', level: 82 },
    ],
  },
];

function SkillBar({ name, level, inView, delay }) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-gray-500 text-sm">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />
      </div>
    </div>
  );
}

function SkillGroup({ group, groupIndex }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-7"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{group.icon}</span>
        <h3 className="text-lg font-bold text-white">{group.category}</h3>
      </div>
      <div className="space-y-5">
        {group.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            {...skill}
            inView={inView}
            delay={groupIndex * 0.15 + i * 0.1 + 0.3}
          />
        ))}
      </div>
    </motion.div>
  );
}

const services = [
  { icon: '💻', title: 'Web Development', desc: 'Full-stack web apps built with modern frameworks and best practices.' },
  { icon: '📱', title: 'Responsive Design', desc: 'Pixel-perfect, mobile-first interfaces that work on every device.' },
  { icon: '⚡', title: 'Performance', desc: 'Optimized applications with fast load times and smooth interactions.' },
  { icon: '🔒', title: 'Security', desc: 'Secure authentication, data validation, and safe API design.' },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-28 px-6 relative">
      <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-purple-900/15 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-purple-500" />
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Skills</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} groupIndex={i} />
          ))}
        </div>

        {/* Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center card-hover"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h4 className="text-white font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
