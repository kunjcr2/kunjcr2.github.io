import { useState } from 'react'

function Hackathons() {
    const [isExpanded, setIsExpanded] = useState(false)

    const hackathons = [
        {
            name: 'MCP AWS Agentic Challange',
            where: 'AWS Builder Loft, SF',
            when: '7/25/2025',
            project: 'Nango Automation',
        },
        {
            name: 'Cal Hacks 11.0',
            where: 'San Francisco, CA',
            when: 'October 18, 2024 – October 20, 2024',
            project: 'Workout Web App',
        },
        {
            name: 'SacHacks',
            where: 'Virtual Hackathon',
            when: 'March 2, 2025 – March 3, 2025',
            project: 'Web Detective',
        },
        {
            name: 'HackMerced',
            where: 'University of California, Merced',
            when: 'March 9, 2025 – March 11, 2025',
            project: 'Web Detective (Updated)',
        }
    ]

    return (
        <section
            id="hackathons"
            className="py-20 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold mb-4">
                        Competitions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Hackathons
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Participating in competitive coding events and building innovative solutions under time constraints
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full md:w-auto mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 mb-8"
                    >
                        {isExpanded ? 'Hide' : 'Show'} all Hackathons
                        <svg
                            className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isExpanded && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {hackathons.map((hackathon, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                                {hackathon.name}
                                            </h3>
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <span className="text-sm">{hackathon.where}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="text-sm">{hackathon.when}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-700">
                                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                                    </svg>
                                                    <span className="text-sm font-semibold">{hackathon.project}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Hackathons
