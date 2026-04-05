import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold text-gradient">Elesdody</a>
          <p className="text-gray-600 text-sm mt-1">Full-Stack Developer &amp; UI/UX Enthusiast</p>
        </div>

        <div className="flex gap-4">
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
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-gray-600 text-sm flex items-center gap-1.5">
          Made with <FiHeart className="text-pink-500" size={14} /> by Elesdody © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
