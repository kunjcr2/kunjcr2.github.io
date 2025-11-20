function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: ['Python', 'JavaScript', 'Java', 'C++', 'HTML/CSS', 'SQL']
        },
        {
            title: 'AI Tools & Frameworks',
            skills: [
                'LangChain', 'LangFlow', 'n8n', 'RAG Pipelines', 'OpenAI API',
                'Hugging Face Transformers', 'MCP Servers', 'Vector Databases', 'Prompt Engineering'
            ]
        },
        {
            title: 'Machine Learning & Deep Learning',
            skills: [
                'PyTorch', 'TensorFlow', 'Scikit-learn', 'Keras', 'OpenCV', 'Pandas', 'NumPy',
                'Matplotlib', 'NLP', 'Computer Vision', 'LoRA', 'Neural Networks', 'Weights & Biases',
                'Encoder–Decoder Models', 'Reinforcement Learning', 'DPO', 'PPO'
            ]
        },
        {
            title: 'MLOps & Deployment',
            skills: [
                'Docker', 'vLLM Serving', 'Hugging Face Hub', 'Model Deployment',
                'GPU Optimization', 'Distributed Training', 'Vertex AI', 'Git'
            ]
        },
        {
            title: 'Web Development',
            skills: ['Node.js', 'React.js', 'Flask', 'TailwindCSS', 'Express.js']
        },
        {
            title: 'Database & Development Tools',
            skills: ['MongoDB', 'MySQL', 'Vertex AI', 'Git', 'Docker']
        },
        {
            title: 'LLM Architectures & Systems',
            skills: [
                'Transformers', 'Attention Mechanisms', 'Pretraining', 'Finetuning', 'Tokenizers',
                'vLLM Optimization', 'Mixture of Experts', 'Mixture of Recursions', 'Mixture of Depths',
                'Rotary Positional Encodings', 'Multi-Token Prediction', 'Flash Attention',
                'Sliding Window Attention', 'Reasoning Models', 'HRMs', 'GPU Training', 'Distributed Learning'
            ]
        },
        {
            title: 'Core CS & Problem Solving',
            skills: [
                'Data Structures & Algorithms', 'Binary Trees & BSTs', 'Graph DFS/BFS',
                'Dynamic Programming', 'SQL Querying'
            ]
        }
    ]

    return (
        <section
            id="skills"
            className="py-20 bg-slate-50"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">
                        Technical Skills
                    </h2>
                    <div className="w-20 h-1 bg-slate-900 rounded-full mb-6 md:mx-0 mx-auto"></div>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        A comprehensive toolkit spanning AI/ML, full-stack development, and modern software engineering practices.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-6">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100 font-serif">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-md hover:bg-slate-100 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
