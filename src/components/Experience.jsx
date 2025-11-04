function Experience() {
    const experiences = [
        {
            title: 'AI Engineering Intern',
            company: 'Routes Technologies',
            location: 'Remote (based in Texas)',
            period: 'Oct 2025 — Jan 2026',
            description: '',
            achievements: [],
            link: 'https://www.linkedin.com/company/routestechnologies/posts/?feedView=all',
            linkLabel: 'LinkedIn',
        },
        {
            title: 'AI Agent Intern',
            company: 'Dreamable Inc.',
            location: '',
            period: 'June 2024 to August 2025',
            description: 'Collaborating on the development of AI agent solutions that enable developers to build intelligent LLM workflows 2–3x faster using low-code and no-code tools, focusing on agent orchestration, prompt chaining, and modular tool integration.',
            achievements: [
                'n8n outreach agent adopted by 14 interns',
                'lead‑quality ↑2.3×'
            ],
            link: '',
            linkLabel: '',
        },
        {
            title: 'Vice President of AI Club',
            company: 'SF State',
            location: '',
            period: 'June 2024 to August 2025',
            description: 'Leading initiatives to bring AI education and resources to students on campus, organizing workshops, talks, and hands-on projects.',
            achievements: [
                'Bringing AI to students on campus of SFSU'
            ],
            link: 'https://ai-at-sfsu.vercel.app/home',
            linkLabel: 'Website',
        }
    ]

    return (
        <section
            id="experience"
            className="py-16 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-mono">
                        Experience
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Building impactful AI solutions across startups and academic institutions
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="border-l-2 border-gray-300 pl-6 pb-6 last:pb-0"
                            >
                                <div className="bg-gray-50 border border-gray-200 p-5">
                                    <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1 font-mono">
                                                {exp.title}
                                            </h3>
                                            <p className="text-base font-medium text-gray-700 mb-1">
                                                {exp.company}
                                            </p>
                                            {exp.location && (
                                                <p className="text-sm text-gray-500">
                                                    {exp.location}
                                                </p>
                                            )}
                                        </div>
                                        <span className="px-3 py-1 bg-gray-200 text-gray-700 text-xs font-mono whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>

                                    {exp.description && (
                                        <p className="text-gray-600 leading-relaxed mb-3 text-sm">
                                            {exp.description}
                                        </p>
                                    )}

                                    {exp.achievements.length > 0 && (
                                        <div className="mb-3">
                                            <ul className="space-y-1.5">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-gray-700 text-sm">
                                                        <span className="text-gray-400 mt-0.5">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {exp.link && (
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-gray-900 hover:text-gray-700 text-sm font-medium underline"
                                        >
                                            {exp.linkLabel}
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
