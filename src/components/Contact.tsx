import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants/content';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900 text-zinc-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Let's build something <span className="text-blue-400 italic">amazing</span> together.</h2>
            <p className="text-zinc-400 text-lg mb-10 max-w-md">
              I'm always open to new opportunities, freelance projects, or just a friendly chat about technology.
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-zinc-800 text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                   <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">Email Me</div>
                   <div className="text-lg font-medium">{PERSONAL_INFO.email}</div>
                </div>
              </a>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace(/\+/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-800 hover:bg-green-600 transition-colors"
                  title="WhatsApp"
                >
                  <MessageSquare size={24} />
                </a>
                <a 
                  href={`sms:${PERSONAL_INFO.whatsapp}`} 
                  className="p-3 rounded-full bg-zinc-800 hover:bg-blue-600 transition-colors"
                  title="Text Message"
                >
                  <Send size={24} className="rotate-[-45deg]" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-zinc-800/50 p-8 rounded-3xl border border-zinc-700 backdrop-blur-sm"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-zinc-400">Thank you for reaching out. I'll get back to you soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-blue-400 font-bold hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email Address</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Message</label>
                  <textarea 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all font-medium"
                  />
                </div>
                
                {status === 'error' && (
                  <p className="text-red-400 text-sm font-medium">Something went wrong. Please try again.</p>
                )}

                <button 
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

