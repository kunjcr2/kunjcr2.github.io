import { useState } from 'react'

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
        <section
            id="certificates"
            className="py-16 bg-gray-50"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 font-mono">
                        Certificates & Courses
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl">
                        Continuous learning through online courses and certifications from top universities and platforms
                    </p>
                </div>

                <div className="max-w-5xl mx-auto flex justify-start">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mb-6 px-5 py-2.5 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                        {isExpanded ? 'Hide' : 'Show'} all certificates
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
                        <div className="grid md:grid-cols-2 gap-3">
                            {certificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-white border border-gray-200 p-3 hover:border-gray-300 transition-colors"
                                >
                                    <p className="text-gray-700 text-sm leading-relaxed">{cert}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Certificates
