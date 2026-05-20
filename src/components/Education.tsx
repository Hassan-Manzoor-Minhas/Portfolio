import { motion } from 'motion/react';
import { EDUCATION } from '../constants/content';

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-16 tracking-tight text-center">Education</h2>
        
        <div className="max-w-3xl mx-auto space-y-12">
          {EDUCATION.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-600 dark:bg-purple-400 border-4 border-white dark:border-zinc-950" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">{item.degree}</h3>
                <span className="text-sm font-medium text-purple-600 dark:text-purple-400 font-mono">{item.year}</span>
              </div>
              
              <div className="text-sm font-semibold text-zinc-500">{item.school}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
