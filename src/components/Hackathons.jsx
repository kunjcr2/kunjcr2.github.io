import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, MapPin, Calendar, Code, ChevronDown } from 'lucide-react'

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
        <section id="hackathons" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display flex items-center gap-3">
                        <Trophy className="text-yellow-500" size={32} />
                        Hackathons
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-6"></div>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Participating in competitive coding events and building innovative solutions under time constraints.
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            {isExpanded ? 'Show Less' : 'Show All Hackathons'}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AnimatePresence>
                            {(isExpanded ? hackathons : hackathons.slice(0, 2)).map((hackathon, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    layout
                                    className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors"
                                >
                                    <h3 className="text-xl font-bold text-white mb-4 font-display">
                                        {hackathon.name}
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="text-slate-500 mt-0.5" size={16} />
                                            <div className="text-slate-400">{hackathon.where}</div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Calendar className="text-slate-500 mt-0.5" size={16} />
                                            <div className="text-slate-400">{hackathon.when}</div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <Code className="text-cyan-500 mt-0.5" size={16} />
                                            <div className="text-cyan-400 font-semibold">{hackathon.project}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hackathons
