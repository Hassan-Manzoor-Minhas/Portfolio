import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, MessageSquare, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/content';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Accents (Fluent Hero Layout Glows with smooth floating trajectories) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            x: [0, 45, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/6 -left-20 w-[30rem] h-[30rem] bg-blue-500/10 dark:bg-blue-500/8 rounded-full blur-[110px]"
        />
        <motion.div 
          animate={{
            x: [0, -35, 45, 0],
            y: [0, 50, -35, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/6 -right-20 w-[35rem] h-[35rem] bg-purple-500/10 dark:bg-purple-500/8 rounded-full blur-[130px]"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 mb-6">
              {PERSONAL_INFO.role.toUpperCase()}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 font-sans">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">{PERSONAL_INFO.name.split(' ')[0]}</span>.
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.tagline}
            </p>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-zinc-100/80 dark:bg-zinc-900/85 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/70 text-zinc-800 dark:text-zinc-200 border border-zinc-200/50 dark:border-zinc-800/65 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
            <a
              href={PERSONAL_INFO.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Open CV <ExternalLink size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" title="GitHub">
              <Github size={24} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors" title="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-green-600 transition-colors" title="WhatsApp">
              <MessageSquare size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
