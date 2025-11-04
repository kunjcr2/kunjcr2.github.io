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
            className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-6 transition-all duration-300"
        >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-left font-mono">
                Technical Skills
            </h2>
            <div className="space-y-6">
                {skillCategories.map((category, index) => (
                    <div key={index}>
                        <h3 className="text-lg md:text-xl font-semibold text-primary mb-3 pb-2 border-b border-primary/30 font-mono">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center border border-primary/40 text-primary px-3 py-1 rounded-full text-sm font-medium font-mono hover:bg-primary/10 transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
