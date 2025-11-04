function LLMProjects() {
    const projects = [
        {
            title: 'How LLMs Are Made',
            description: 'An all-in-one GitHub repo documenting my hands-on journey building and experimenting with LLMs—from GPT, Deepseek, and Kimi architectures to advanced techniques like MoE, MoD, MHLA, and MLA.',
            features: [
                'Technical Insights & Documentation',
                'Full-Stack LLM Solutions',
                'Kimi, GPT, Deepseek Architectures'
            ],
            link: 'https://github.com/kunjcr2/how-llms-are-made',
        },
        {
            title: 'GatorGPT',
            description: 'A lightweight 63M param transformer-based language model with modern architecture built for my University. Features Grouped Query Attention, RoPE positioning, and SwiGLU activation.',
            highlight: 'Eval loss dropped from ~246 to ~1.503',
            features: [
                'Fast Inference with torch.compile & flash attention',
                'Memory Efficient GQA reduces memory usage',
                'One-click Docker deployment with vLLM'
            ],
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/GatorGPT' },
                { label: 'HuggingFace', url: 'https://huggingface.co/kunjcr2/GatorGPT2' }
            ],
        }
    ]

    return (
        <section
            id="llm-projects"
            className="py-20 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                        Research & Development
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        LLM Research & Development
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Exploring the frontiers of large language models through hands-on experimentation and production-ready implementations
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-200 hover:border-blue-300 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {project.description}
                            </p>

                            {project.highlight && (
                                <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-600">
                                    <p className="text-sm font-semibold text-gray-900">
                                        {project.highlight}
                                    </p>
                                </div>
                            )}

                            <ul className="space-y-3 mb-8">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-600">
                                        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex gap-3">
                                {project.link ? (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Explore Repository
                                    </a>
                                ) : (
                                    project.links?.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    ))
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LLMProjects
