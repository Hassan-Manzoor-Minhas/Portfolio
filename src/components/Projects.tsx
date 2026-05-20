import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { PROJECTS } from '../constants/content';
import { cn } from '../lib/utils';

export default function Projects() {
  const categories = ['All', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleCategory = (cat: string) => {
    if (cat === 'All') {
      setSelectedCategories(['All']);
      return;
    }

    setSelectedCategories(prev => {
      const next = prev.includes('All') ? [cat] : prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat];
      return next.length === 0 ? ['All'] : next;
    });
  };

  const filteredProjects = (selectedCategories.includes('All')) 
    ? PROJECTS 
    : PROJECTS.filter(p => selectedCategories.includes(p.category));

  return (
    <section id="projects" className="py-24 bg-zinc-50/50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Featured Projects</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              A selection of my best work, ranging from AI-powered applications to complex management systems.
            </p>
          </div>
          <a href={PROJECTS[0].github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-medium hover:underline flex items-center gap-2">
            View All GitHub <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                selectedCategories.includes(cat)
                  ? "bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 shadow-md"
                  : "bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col h-full"
              >
                <div className="aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden relative">
                  {/* Project Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-zinc-400 dark:text-zinc-600 font-medium italic p-4 text-center">
                    {project.title} Preview
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 transition-colors shadow-lg">
                        <Github size={20} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 transition-colors shadow-lg">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                     <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                       {project.category}
                     </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setExpandedCard(expandedCard === project.title ? null : project.title)}
                    className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline mb-6"
                  >
                    {expandedCard === project.title ? "Less Info" : "More Info"}
                  </button>
                  <AnimatePresence>
                    {expandedCard === project.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mb-6"
                      >
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm italic leading-relaxed">
                          {project.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-mono font-medium text-zinc-400 dark:text-zinc-500">#{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
