function Hero() {
    const handleResumeDownload = () => {
        const link = document.createElement('a')
        link.href = '/resumes/Kunj_Shah_Resume.pdf'
        link.download = 'Kunj_Shah_Resume.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 md:pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        {/* Left column - Image and Social Links */}
                        <div className="lg:col-span-5 flex flex-col items-center">
                            <div className="relative mb-8">
                                <img
                                    src="../../assets/headshot.JPG"
                                    alt="Kunj Shah headshot"
                                    className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-gray-400 shadow-md"
                                />
                            </div>

                            {/* Social Links Grid */}
                            <div className="grid grid-cols-5 gap-3 w-full max-w-xs">
                                <a
                                    href="https://github.com/kunjcr2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="p-3 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 transition-colors flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kunjcr2/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="p-3 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 transition-colors flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href="mailto:kunjcr2@gmail.com"
                                    aria-label="Email"
                                    className="p-3 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 transition-colors flex items-center justify-center"
                                >
                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://g.dev/kunjcr2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Google Developers"
                                    className="p-3 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 transition-colors flex items-center justify-center"
                                >
                                    <img src="/assets/logo_google_for_dev.svg" alt="Google Developers" className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://huggingface.co/kunjcr2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Hugging Face"
                                    className="p-3 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 transition-colors flex items-center justify-center"
                                >
                                    <img src="https://cdn.simpleicons.org/huggingface/FFD21F" alt="Hugging Face" className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Right column - Text Content */}
                        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
                            <div className="space-y-4">
                                <div>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-3 font-mono">
                                        Kunj Shah
                                    </h1>
                                    <div className="flex items-center justify-center lg:justify-start gap-2 flex-wrap mb-4">
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-mono font-medium">AI Agent Intern</span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-mono font-medium">LLM Developer</span>
                                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-xs font-mono font-medium">ML Researcher</span>
                                    </div>
                                </div>

                                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    Building intelligent systems and shipping LLM-powered products. Passionate about pushing the boundaries of AI and machine learning.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <a
                                    href="/resumes/Kunj_Shah_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded border border-gray-900 hover:bg-gray-800 transition-colors"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                    View Résumé
                                </a>
                                <button
                                    onClick={handleResumeDownload}
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 text-sm font-medium rounded hover:bg-gray-50 transition-colors"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
