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
            className="py-16 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-mono">
                        Technical Skills
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        A comprehensive toolkit spanning AI/ML, full-stack development, and modern software engineering practices
                    </p>
                </div>
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gray-50 border border-gray-200 p-6 md:p-8">
                        <div className="space-y-6">
                            {skillCategories.map((category, index) => (
                                <div key={index}>
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 pb-2 border-b border-gray-300 font-mono">
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="inline-flex items-center border border-gray-300 text-gray-700 px-3 py-1 text-sm font-medium font-mono hover:bg-gray-100 transition-colors"
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
            </div>
        </section>
    )
}

export default Skills
