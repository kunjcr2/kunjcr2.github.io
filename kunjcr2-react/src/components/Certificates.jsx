import { useState } from 'react'

const Certificates = () => {
    const [isOpen, setIsOpen] = useState(false)

    const certificatesList1 = [
        "Programming for Everybody (Getting Started with Python) – University of Michigan",
        "Python Data Structures – University of Michigan",
        "Introduction to Generative AI – Google Cloud",
        "Crash course on Python – Google",
        "Calculus through data and modelling: Series and integration – Johns Hopkins University",
        "Calculus through data and modelling: Techniques of integration – Johns Hopkins University",
        "Calculus through data and modelling: Integration Applications – Johns Hopkins University",
        "Calculus through data and modelling: Vector Calculus – Johns Hopkins University",
        "Introduction to Web Development – UC Davis"
    ]

    const certificatesList2 = [
        "Understanding Einstein: Special theory of relativity – Stanford University",
        "Introduction to complex analysis – Wesleyan University",
        "Understanding Basic SQL Syntax – Coursera Project Network",
        "C++ Basics: Selection and Iteration – Codec",
        "Building a Text-based Bank – Coursera Project Network",
        "Create a Supermarket app using Java OOP – Coursera Project Network",
        "Python 101: Develop Your First Python Program – Coursera Project Network",
        "LOR by Duc Ta - CSC215",
        "LOR by Maitra Shah - Internship Certificate"
    ]

    return (
        <section id="certificates" className="bg-black rounded-2xl shadow-lg p-8 mb-12 transition-all duration-300 animate-slide-up">
            <div className="group">
                <div
                    className="cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
                        <i className="fa-solid fa-certificate"></i> Certificates
                        <i className={`fa-solid fa-chevron-down transition-transform ${isOpen ? 'rotate-180' : ''} ml-auto text-xl`}></i>
                    </h2>
                </div>
                {isOpen && (
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        <ul className="space-y-4">
                            {certificatesList1.map((cert, index) => (
                                <li key={index} className="bg-black rounded-lg p-4 hover:translate-x-2 transition-transform">
                                    {cert}
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-4">
                            {certificatesList2.map((cert, index) => (
                                <li key={index} className="bg-black rounded-lg p-4 hover:translate-x-2 transition-transform">
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Certificates