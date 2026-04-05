import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-700/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="text-gradient">Elesdody</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-400 font-light mb-4 tracking-wide"
        >
          Full-Stack Developer &amp; UI/UX Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft beautiful digital experiences with clean code and thoughtful design.
          Turning ideas into reality, one pixel at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          <a
            href="#work"
            className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 glow hover:shadow-purple-500/50 hover:shadow-xl"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:bg-white/5"
          >
            Get in touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex justify-center gap-5">
          {[
            { icon: FiGithub, href: 'https://github.com/elesdody5', label: 'GitHub' },
            { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
            { icon: FiTwitter, href: '#', label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
