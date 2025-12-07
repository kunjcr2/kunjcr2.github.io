import { motion } from 'framer-motion'
import { Github, ExternalLink, Cpu, GitBranch, Star } from 'lucide-react'

function LLMProjects() {
    const projects = [
        {
            title: 'How LLMs Are Made',
            description: 'Comprehensive documentation and implementation of LLM architectures. Building GPT, Deepseek, and Kimi from scratch to understand MoE, MoD, and attention mechanisms.',
            tags: ['PyTorch', 'Transformers', 'MoE', 'Architecture'],
            stats: { stars: '1.2k', forks: '150' },
            link: 'https://github.com/kunjcr2/how-llms-are-made',
            featured: true
        },
        {
            title: 'GatorGPT',
            description: '63M parameter transformer model optimized for academic use. Implements Grouped Query Attention (GQA) and RoPE for efficient inference on consumer hardware.',
            tags: ['LLM', 'Inference', 'C++', 'CUDA'],
            stats: { stars: '850', performance: '1.5 vs 246 loss' },
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/GatorGPT' },
                { label: 'HuggingFace', url: 'https://huggingface.co/kunjcr2/GatorGPT2' }
            ]
        }
    ]

    return (
        <section id="llm-projects" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display flex items-center gap-3">
                            <Cpu className="text-cyan-400" size={32} />
                            LLM Research & Engineering
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6"></div>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Pushing the boundaries of what's possible with small language models and efficient inference architectures.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>

                            <div className="relative h-full bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/50 transition-colors">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-cyan-950/30 rounded-lg border border-cyan-400/20 text-cyan-400">
                                        <GitBranch size={24} />
                                    </div>
                                    <div className="flex gap-3">
                                        {project.stats.stars && (
                                            <div className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-950/50 px-2 py-1 rounded">
                                                <Star size={12} className="text-yellow-500" />
                                                {project.stats.stars}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-950 text-slate-300 text-xs font-mono border border-slate-800 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto pt-6 border-t border-slate-800">
                                    {project.link ? (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                                        >
                                            <Github size={18} />
                                            View Source
                                        </a>
                                    ) : (
                                        project.links?.map((link, i) => (
                                            <a
                                                key={i}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                                            >
                                                {link.label === 'GitHub' ? <Github size={18} /> : <ExternalLink size={18} />}
                                                {link.label}
                                            </a>
                                        ))
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LLMProjects
