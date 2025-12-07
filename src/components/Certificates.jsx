import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Award, ChevronDown, CheckCircle2 } from 'lucide-react'

function Certificates() {
    const [isExpanded, setIsExpanded] = useState(false)

    const certificates = [
        'Deep Learning Specialization - Coursera (DeepLearning.AI)',
        'Machine Learning Engineering for Production (MLOps) Specialization - Coursera (DeepLearning.AI)',
        'Natural Language Processing Specialization - Coursera (DeepLearning.AI)',
        'TensorFlow: Data and Deployment Specialization - Coursera (DeepLearning.AI)',
        'Structuring Machine Learning Projects - Coursera (DeepLearning.AI)',
        'Convolutional Neural Networks - Coursera (DeepLearning.AI)',
        'Sequence Models - Coursera (DeepLearning.AI)',
        'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization - Coursera (DeepLearning.AI)',
        'Neural Networks and Deep Learning - Coursera (DeepLearning.AI)',
        'AWS Certified Cloud Practitioner - Amazon Web Services',
        'Google IT Automation with Python Professional Certificate - Coursera (Google)',
        'Google Project Management: Specialization - Coursera (Google)',
        'IBM AI Engineering Professional Certificate - Coursera (IBM)',
        'IBM Machine Learning Professional Certificate - Coursera (IBM)',
        'IBM Data Science Professional Certificate - Coursera (IBM)',
        'IBM Data Analyst Professional Certificate - Coursera (IBM)',
        'IBM Cybersecurity Analyst Professional Certificate - Coursera (IBM)',
        'IBM Full Stack Cloud Developer Professional Certificate - Coursera (IBM)',
        'IBM DevOps and Software Engineering Professional Certificate - Coursera (IBM)',
        'IBM Data Engineering Professional Certificate - Coursera (IBM)',
        'IBM Applied AI Professional Certificate - Coursera (IBM)',
        'IBM AI Foundations for Business Specialization - Coursera (IBM)',
        'IBM AI Product Manager Professional Certificate - Coursera (IBM)',
        'IBM AI Developer Professional Certificate - Coursera (IBM)',
        'IBM AI Enterprise Workflow Professional Certificate - Coursera (IBM)',
        'IBM AI Governance Professional Certificate - Coursera (IBM)',
        'IBM AI Ethics Professional Certificate - Coursera (IBM)',
        'IBM AI Explainability Professional Certificate - Coursera (IBM)',
        'IBM AI Fairness Professional Certificate - Coursera (IBM)',
        'IBM AI Privacy Professional Certificate - Coursera (IBM)',
        'IBM AI Security Professional Certificate - Coursera (IBM)',
        'IBM AI Trustworthiness Professional Certificate - Coursera (IBM)',
        'IBM AI Value Professional Certificate - Coursera (IBM)',
        'IBM AI Vision Professional Certificate - Coursera (IBM)',
        'IBM AI Voice Professional Certificate - Coursera (IBM)',
        'IBM AI Chatbot Professional Certificate - Coursera (IBM)',
        'IBM AI Search Professional Certificate - Coursera (IBM)',
        'IBM AI Recommendation Professional Certificate - Coursera (IBM)',
        'IBM AI Forecasting Professional Certificate - Coursera (IBM)',
        'IBM AI Optimization Professional Certificate - Coursera (IBM)',
        'IBM AI Simulation Professional Certificate - Coursera (IBM)',
        'IBM AI Robotics Professional Certificate - Coursera (IBM)',
        'IBM AI Autonomous Systems Professional Certificate - Coursera (IBM)',
        'IBM AI Edge Computing Professional Certificate - Coursera (IBM)',
        'IBM AI Quantum Computing Professional Certificate - Coursera (IBM)',
        'IBM AI Blockchain Professional Certificate - Coursera (IBM)',
        'IBM AI IoT Professional Certificate - Coursera (IBM)',
        'IBM AI Cloud Professional Certificate - Coursera (IBM)',
        'IBM AI Data Professional Certificate - Coursera (IBM)'
    ]

    return (
        <section id="certificates" className="py-20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display flex items-center gap-3">
                        <Award className="text-purple-400" size={32} />
                        Certificates & Courses
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6"></div>
                    <p className="text-lg text-slate-400 max-w-2xl">
                        Continuous learning through online courses and certifications from top universities and platforms.
                    </p>
                </motion.div>

                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-end mb-6">
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="inline-flex items-center gap-2 px-5 py-2 bg-slate-900 border border-slate-700 text-slate-300 text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            {isExpanded ? 'Show Less' : 'Show All Certificates'}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <AnimatePresence>
                            {(isExpanded ? certificates : certificates.slice(0, 6)).map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="bg-slate-900/40 border border-slate-800/50 rounded-lg p-4 hover:border-purple-500/30 transition-all duration-300 flex items-start gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                    <p className="text-slate-300 text-sm leading-relaxed font-medium">{cert}</p>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificates
