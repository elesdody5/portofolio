import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'elesdody@example.com', href: 'mailto:elesdody@example.com' },
  { icon: FiMapPin, label: 'Location', value: 'Cairo, Egypt', href: '#' },
];

const socials = [
  { icon: FiGithub, href: 'https://github.com/elesdody5', label: 'GitHub' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    // Simulate form submission
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute left-1/4 bottom-0 w-96 h-64 bg-purple-800/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="h-px w-8 bg-purple-500" />
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Contact</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="text-gradient">work together</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s talk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-600/30 transition-colors">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">{label}</div>
                    <div className="text-white font-medium">{value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            <div>
              <p className="text-gray-500 text-sm mb-4">Find me on</p>
              <div className="flex gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
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
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/10 border border-purple-500/20 rounded-2xl p-7 mt-auto">
              <p className="text-white font-semibold text-lg mb-2">Currently available 🟢</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                I&apos;m open to freelance projects and full-time opportunities. Let&apos;s build something amazing together!
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-10">
                <div className="text-5xl">🎉</div>
                <h3 className="text-2xl font-bold text-white">Message sent!</h3>
                <p className="text-gray-500">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="mt-4 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-5"
              >
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 glow"
                >
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
