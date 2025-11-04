import { useState } from 'react'

function Certificates() {
    const [isExpanded, setIsExpanded] = useState(false)

    const certificates = [
        'Programming for Everybody (Getting Started with Python) – University of Michigan',
        'Python Data Structures – University of Michigan',
        'Crash course on Python – Google',
        'Calculus through data and modelling: Series and integration – Johns Hopkins University',
        'Calculus through data and modelling: Techniques of integration – Johns Hopkins University',
        'Calculus through data and modelling: Integration Applications – Johns Hopkins University',
        'Calculus through data and modelling: Vector Calculus – Johns Hopkins University',
        'Introduction to Web Development – UC Davis',
        'Understanding Einstein: Special theory of relativity – Stanford University',
        'Introduction to complex analysis – Wesleyan University',
        'Understanding Basic SQL Syntax – Coursera Project Network',
        'C++ Basics: Selection and Iteration – Codec',
        'Building a Text-based Bank – Coursera Project Network',
        'Create a Supermarket app using Java OOP – Coursera Project Network',
        'Python 101: Develop Your First Python Program – Coursera Project Network',
        'LOR by Duc Ta - CSC215',
        'LOR by Maitra Shah - Internship Certificate'
    ]

    return (
        <section
            id="certificates"
            className="py-20 bg-gradient-to-b from-white to-gray-50"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold mb-4">
                        Achievements
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Certificates & Courses
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Continuous learning through online courses and certifications from top universities and platforms
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full md:w-auto mx-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 mb-8"
                    >
                        {isExpanded ? 'Hide' : 'Show'} all certificates
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
                        <div className="grid md:grid-cols-2 gap-4">
                            {certificates.map((cert, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-4 hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-blue-300 transform hover:-translate-x-1"
                                >
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="text-gray-700 text-sm leading-relaxed">{cert}</p>
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

export default Certificates
