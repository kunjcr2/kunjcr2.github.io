import { useState } from 'react'

function Hackathons() {
    const [isExpanded, setIsExpanded] = useState(false)

    const hackathons = [
        {
            name: 'MCP AWS Agentic Challange',
            where: 'AWS Builder Loft, SF',
            when: 'July 25, 2025',
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
        },
        {
            name: 'CalHacks 12.0',
            where: 'Palace of Fine Arts, SF',
            when: 'October 24, 2025 – October 26, 2025',
            project: 'Kantin AI',
        }
    ]

    return (
        <section
            id="hackathons"
            className="py-16 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-mono">
                        Hackathons
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Participating in competitive coding events and building innovative solutions under time constraints
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mb-6 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        {isExpanded ? 'Hide' : 'Show'} all Hackathons
                        <svg
                            className={`inline-block w-4 h-4 ml-2 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {isExpanded && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {hackathons.map((hackathon, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 p-5 hover:border-gray-300 transition-colors"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-mono">
                                        {hackathon.name}
                                    </h3>
                                    <div className="space-y-1.5 text-sm">
                                        <div className="text-gray-600">
                                            <span className="font-medium">Location:</span> {hackathon.where}
                                        </div>
                                        <div className="text-gray-600">
                                            <span className="font-medium">Date:</span> {hackathon.when}
                                        </div>
                                        <div className="text-gray-900 font-medium">
                                            <span className="font-medium">Project:</span> {hackathon.project}
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
