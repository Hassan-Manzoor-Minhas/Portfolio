import { motion } from 'motion/react';
import { SKILLS } from '../constants/content';

export default function Skills() {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Technical Arsenal</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.filter(s => s.category === category).map(skill => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-800 text-sm font-medium border border-zinc-200 dark:border-zinc-700 shadow-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
