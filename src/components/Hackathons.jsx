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
            className="py-20 bg-white"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-serif">
                        Hackathons
                    </h2>
                    <div className="w-20 h-1 bg-slate-900 rounded-full mb-6 md:mx-0 mx-auto"></div>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        Participating in competitive coding events and building innovative solutions under time constraints.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors shadow-sm"
                        >
                            {isExpanded ? 'Show Less' : 'Show All Hackathons'}
                            <svg
                                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ${isExpanded ? 'opacity-100' : 'opacity-100'}`}>
                        {/* Always show first 2, or all if expanded */}
                        {(isExpanded ? hackathons : hackathons.slice(0, 2)).map((hackathon, index) => (
                            <div
                                key={index}
                                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">
                                    {hackathon.name}
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <div className="flex items-start gap-3">
                                        <div className="min-w-[80px] font-medium text-slate-500">Location:</div>
                                        <div className="text-slate-700">{hackathon.where}</div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="min-w-[80px] font-medium text-slate-500">Date:</div>
                                        <div className="text-slate-700">{hackathon.when}</div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <div className="min-w-[80px] font-medium text-slate-500">Project:</div>
                                        <div className="text-slate-900 font-semibold">{hackathon.project}</div>
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

export default Hackathons
