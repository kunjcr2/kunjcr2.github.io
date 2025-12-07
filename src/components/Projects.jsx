import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

function Projects() {
    const projects = [
        {
            title: 'Max - AI Voice Assistant',
            image: '/assets/max_thumb.jpg',
            tags: ['90% voice accuracy', '8 tools', 'Langchain/OpenAI'],
            description: 'Developed a voice-activated AI assistant using Langchain, OpenAI, Hugging Face, and SpeechRecognition to automate tasks like web search, YouTube streaming, and emailing.',
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/Max' }
            ]
        },
        {
            title: 'Llama-3.2-3b Finetuned',
            image: '/assets/llama.png',
            tags: ['~300k QA Pairs', 'LoRA', 'vLLM', 'Docker'],
            description: 'An instruction-tuned Llama-3.2-3B base model trained with LoRA on the OpenHermes dataset. This run transformed the base model into an instruct-capable assistant with only ~0.75% of parameters updated.',
            links: [
                { label: 'Hugging Face', url: 'https://huggingface.co/kunjcr2/llama3-3b-lora-openhermes' },
                { label: 'GitHub', url: 'https://github.com/kunjcr2/llama-3.2-3b-openhermes' }
            ]
        },
        {
            title: 'Qwen2.5-0.5B SFT + DPO',
            image: '/assets/qwen_image.png',
            tags: ['85M tokens', '1.48 val loss', '66% reward acc'],
            description: 'A two-stage pipeline where the model was first trained on 85M tokens with supervised fine-tuning, and then optimized with Direct Preference Optimization to achieve 66% reward accuracy.',
            links: [
                { label: 'Hugging Face', url: 'https://huggingface.co/kunjcr2/qwen2.5-0.5b-sft-dpo' },
                { label: 'GitHub', url: 'https://github.com/kunjcr2/how-llms-are-made/blob/main/docs/ml-and-dl/Reasoning Models/RLHF/DirectPreferenceOptimization.py' }
            ]
        }
    ]

    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display flex items-center gap-3">
                        <Github className="text-cyan-400" size={32} />
                        Open Source
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6"></div>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        A collection of AI-powered applications and machine learning projects.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300 flex flex-col group"
                        >
                            {/* Image Placeholder if image fails or just a consistent gradient */}
                            <div className="relative h-48 overflow-hidden bg-slate-800 border-b border-slate-800">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                                <img
                                    src={project.image}
                                    alt={`${project.title} thumbnail`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-cyan-900', 'to-slate-800');
                                    }}
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-400 text-xs font-mono rounded-md">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-slate-400 leading-relaxed mb-6 text-sm flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-slate-800">
                                    {project.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 text-sm font-medium transition-colors"
                                        >
                                            {link.label}
                                            <ExternalLink size={14} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="https://github.com/kunjcr2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white border border-slate-700 text-sm font-medium rounded-lg hover:bg-slate-800 transition-all hover:border-cyan-500/50"
                    >
                        <Github size={20} />
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
