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
            className="py-20 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
                        Professional Journey
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Experience
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Building impactful AI solutions across startups and academic institutions
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative pl-8 md:pl-12 pb-8 border-l-2 border-gray-200 last:border-l-0 last:pb-0 group"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full ring-4 ring-white shadow-lg"></div>

                                <div className="bg-white rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-x-2 border border-gray-100">
                                    <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                                        <div className="flex items-start gap-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                                    {exp.title}
                                                </h3>
                                                <p className="text-lg font-semibold text-blue-600 mb-1">
                                                    {exp.company}
                                                </p>
                                                {exp.location && (
                                                    <p className="text-gray-500 text-sm flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        {exp.location}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                        <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium whitespace-nowrap">
                                            {exp.period}
                                        </span>
                                    </div>

                                    {exp.description && (
                                        <p className="text-gray-600 leading-relaxed mb-4">
                                            {exp.description}
                                        </p>
                                    )}

                                    {exp.achievements.length > 0 && (
                                        <div className="mb-4">
                                            <ul className="space-y-2">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-gray-700">
                                                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                        <span className="font-medium">{achievement}</span>
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
                                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                                        >
                                            {exp.linkLabel}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
