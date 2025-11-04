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
            image: '/assets/llama.png',
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
            className="py-16 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-mono">
                        Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        A collection of AI-powered applications and machine learning projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors"
                        >
                            {/* Image */}
                            <div className="relative h-40 overflow-hidden bg-gray-100">
                                <img
                                    src={project.image}
                                    alt={`${project.title} thumbnail`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 font-mono">
                                    {project.title}
                                </h3>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-mono"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
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
                                            className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-700 text-sm font-medium underline"
                                        >
                                            {link.label}
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="text-center mt-10">
                    <a
                        href="https://github.com/kunjcr2/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
