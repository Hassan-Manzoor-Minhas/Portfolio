import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants/content';

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-3xl bg-gradient-to-b from-blue-50 via-zinc-50 to-purple-50 dark:from-zinc-800/50 dark:via-zinc-900/40 dark:to-zinc-800/20 border border-zinc-200/60 dark:border-zinc-700/50 shadow-xl flex items-end justify-center group"
          >
            {/* Soft Ambient Radial Glow Behind the Cutout Portrait */}
            <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 to-transparent dark:from-purple-500/15 opacity-80 pointer-events-none group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute w-44 h-44 rounded-full bg-blue-500/20 dark:bg-purple-500/10 blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <img 
              src={PERSONAL_INFO.profileImage} 
              alt={PERSONAL_INFO.name}
              className="relative w-[90%] h-[90%] object-contain origin-bottom transition-all duration-700 group-hover:scale-105 z-10 filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 tracking-tight">About Me</h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
              <p>{PERSONAL_INFO.about}</p>
              <p>
                I'm currently exploring the intersection of AI and web technologies, 
                looking for opportunities to grow and contribute to innovative teams. 
                Whether it's a sleek landing page or a complex dashboard, 
                I strive for excellence in every line of code.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">20+</div>
                <div className="text-sm text-zinc-500">Repositories</div>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700">
                <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">1y+</div>
                <div className="text-sm text-zinc-500">Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
