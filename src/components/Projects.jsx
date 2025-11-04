function Projects() {
    const projects = [
        {
            title: 'Max - AI Voice Assistant',
            image: '/assets/max_thumb.jpg',
            tags: ['90% voice accuracy', '8 tools', 'Langchain/OpenAI'],
            description: 'Developed a voice-activated AI assistant using Langchain, OpenAI, Hugging Face, and SpeechRecognition to automate tasks like web search, YouTube streaming, and emailing, enhancing user experience through hands-free interaction.',
            links: [
                { label: 'GitHub', url: 'https://github.com/kunjcr2/Max' }
            ]
        },
        {
            title: 'Llama-3.2-3b Finetuned on OpenHermes',
            image: '/assets/qwen_image.png',
            tags: ['~300k QA Pairs', 'LoRA Finetuning', '1.27->0.21 Train loss', 'vLLM and Docker used'],
            description: 'An instruction-tuned Llama-3.2-3B base model trained with LoRA on the OpenHermes dataset. This run transformed the base model into an instruct-capable assistant with only ~0.75% of parameters updated, making it lightweight, deployment-friendly, and packaged as a Docker image.',
            links: [
                { label: 'Hugging Face', url: 'https://huggingface.co/kunjcr2/llama3-3b-lora-openhermes' },
                { label: 'GitHub', url: 'https://github.com/kunjcr2/llama-3.2-3b-openhermes' }
            ]
        },
        {
            title: 'Qwen2.5-0.5B SFT + DPO',
            image: '/assets/qwen_image.png',
            tags: ['85M tokens (SFT)', '1.48 val loss (SFT)', '66% reward accuracy (DPO)'],
            description: 'A two-stage pipeline where the model was first trained on 85M tokens with supervised fine-tuning, reaching a validation loss of 1.48, and then optimized with Direct Preference Optimization to achieve 66% reward accuracy.',
            links: [
                { label: 'Hugging Face', url: 'https://huggingface.co/kunjcr2/qwen2.5-0.5b-sft-dpo' },
                { label: 'GitHub', url: 'https://github.com/kunjcr2/how-llms-are-made/blob/main/docs/ml-and-dl/Reasoning Models/RLHF/DirectPreferenceOptimization.py' }
            ]
        }
    ]

    return (
        <section
            id="projects"
            className="py-20 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                        Featured Projects
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A collection of AI-powered applications and machine learning projects showcasing innovation and technical expertise
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                                <img
                                    src={project.image}
                                    alt={`${project.title} thumbnail`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                                    {project.description}
                                </p>

                                {/* Links */}
                                <div className="flex flex-wrap gap-3">
                                    {project.links.map((link, i) => (
                                        <a
                                            key={i}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors group/link"
                                        >
                                            {link.label}
                                            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More projects link */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/kunjcr2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
