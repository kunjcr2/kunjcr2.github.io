import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Globe, Layers, Terminal } from 'lucide-react'

function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            icon: <Code2 className="text-purple-400" size={24} />,
            skills: ['Python', 'JavaScript', 'Java', 'C++', 'HTML/CSS', 'SQL']
        },
        {
            title: 'AI Tools & Frameworks',
            icon: <Cpu className="text-cyan-400" size={24} />,
            skills: [
                'LangChain', 'LangFlow', 'n8n', 'RAG Pipelines', 'OpenAI API',
                'Hugging Face Transformers', 'MCP Servers', 'Vector Databases', 'Prompt Engineering'
            ]
        },
        {
            title: 'Machine Learning & Deep Learning',
            icon: <Layers className="text-pink-400" size={24} />,
            skills: [
                'PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'OpenCV', 'Pandas', 'NumPy',
                'Matplotlib', 'NLP', 'Computer Vision', 'LoRA', 'Neural Networks', 'Weights & Biases',
                'Encoder–Decoder Models', 'Reinforcement Learning', 'DPO', 'PPO'
            ]
        },
        {
            title: 'MLOps & Deployment',
            icon: <Terminal className="text-green-400" size={24} />,
            skills: [
                'Docker', 'vLLM Serving', 'Hugging Face Hub', 'Model Deployment',
                'GPU Optimization', 'Distributed Training', 'Vertex AI', 'Git'
            ]
        },
        {
            title: 'Web Development',
            icon: <Globe className="text-blue-400" size={24} />,
            skills: ['Node.js', 'React.js', 'Flask', 'TailwindCSS', 'Express.js']
        },
        {
            title: 'Database & Tools',
            icon: <Database className="text-yellow-400" size={24} />,
            skills: ['MongoDB', 'MySQL', 'Vertex AI', 'Git', 'Docker']
        }
    ]

    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display flex items-center gap-3">
                        <Terminal className="text-cyan-400" size={32} />
                        Technical Arsenal
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6"></div>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        A comprehensive toolkit spanning AI/ML, full-stack development, and modern software engineering practices.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:bg-slate-800/80 hover:border-cyan-500/30 transition-all duration-300 shadow-lg group"
                        >
                            <div className="flex items-center gap-3 mb-4 border-b border-slate-800 pb-3">
                                {category.icon}
                                <h3 className="text-lg font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center px-2.5 py-1 bg-cyan-950/20 border border-cyan-900/30 text-cyan-200 text-xs font-medium rounded hover:bg-cyan-900/50 hover:border-cyan-500/50 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
