import { motion } from 'framer-motion'
import { Calendar, MapPin, Briefcase } from 'lucide-react'

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
        <section id="experience" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display flex items-center gap-3">
                        <Briefcase className="text-cyan-400" size={32} />
                        Experience
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6"></div>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent md:transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-slate-900 border-2 border-cyan-400 rounded-full transform -translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_rgba(6,182,212,0.8)]">
                                    <div className="w-full h-full bg-cyan-400/50 rounded-full animate-ping opacity-75"></div>
                                </div>

                                {/* Date (Desktop) */}
                                <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-start pl-12' : 'justify-end pr-12'
                                    } items-center`}>
                                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm py-1 px-3 bg-cyan-950/30 border border-cyan-900 rounded-full">
                                        <Calendar size={14} />
                                        {exp.period}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 px-0 md:px-8">
                                    {/* Mobile Date */}
                                    <div className="md:hidden mb-2 inline-flex items-center gap-2 text-cyan-400 font-mono text-xs py-1 px-2 bg-cyan-950/30 border border-cyan-900 rounded-full">
                                        <Calendar size={12} />
                                        {exp.period}
                                    </div>

                                    <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150"></div>

                                        <h3 className="text-xl font-bold text-white mb-1 font-display relative z-10">{exp.title}</h3>
                                        <div className="text-lg text-cyan-400 mb-2 relative z-10">{exp.company}</div>

                                        {exp.location && (
                                            <div className="flex items-center gap-1 text-slate-500 text-sm mb-4">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </div>
                                        )}

                                        <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                            {exp.description}
                                        </p>

                                        {exp.achievements.length > 0 && (
                                            <ul className="space-y-2 mb-4">
                                                {exp.achievements.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                        <span className="text-cyan-500 mt-1">▹</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {exp.link && (
                                            <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 hover:decoration-cyan-400">
                                                {exp.linkLabel || 'Learn more'}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
