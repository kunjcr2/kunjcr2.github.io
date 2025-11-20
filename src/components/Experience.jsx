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
            className="py-20 bg-slate-50"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-slate-900 rounded-full mb-6 md:mx-0 mx-auto"></div>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Building impactful AI solutions across startups and academic institutions.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative pl-8 md:pl-0"
                            >
                                {/* Timeline Line (Desktop) */}
                                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2"></div>

                                {/* Timeline Dot (Desktop) */}
                                <div className="hidden md:block absolute left-[50%] top-8 w-4 h-4 bg-white border-4 border-slate-900 rounded-full transform -translate-x-1/2 z-10"></div>

                                <div className={`md:flex items-start justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>

                                    {/* Date (Desktop) */}
                                    <div className={`hidden md:block w-[45%] ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'} pt-6`}>
                                        <span className="inline-block px-4 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium shadow-sm">
                                            {exp.period}
                                        </span>
                                    </div>

                                    {/* Content Card */}
                                    <div className="md:w-[45%] bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                                        <div className="md:hidden mb-4">
                                            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-slate-900 mb-1 font-serif">
                                            {exp.title}
                                        </h3>
                                        <p className="text-base font-medium text-slate-700 mb-4">
                                            {exp.company}
                                            {exp.location && <span className="font-normal text-slate-500"> • {exp.location}</span>}
                                        </p>

                                        {exp.description && (
                                            <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                                                {exp.description}
                                            </p>
                                        )}

                                        {exp.achievements.length > 0 && (
                                            <ul className="space-y-2 mb-4">
                                                {exp.achievements.map((achievement, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                                        <span className="text-slate-400 mt-1">•</span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {exp.link && (
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 text-slate-900 hover:text-blue-700 text-sm font-medium transition-colors border-b border-slate-900 hover:border-blue-700 pb-0.5"
                                            >
                                                {exp.linkLabel}
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
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
